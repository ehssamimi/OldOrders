import React from 'react'
import ReactDOM from 'react-dom'
// import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'
import {UpdateHomePage, AddHomePages, GetAllHomePages, GetHomePageLoad, ActiveHomePages ,DeleteHomePages} from "../../../../functions/ServerConnection";

import initialData from './initial-data'
import Column from './column'
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import AddNewHomePageComponent from "../../Edit/AddNewHomePageComponent/AddNewHomePageComponent";

const Container = styled.div`
  display:block;
`

export default class AllPreviewHomePages extends React.Component {
  state = initialData;

    onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const start = this.state.columns[source.droppableId]
    const finish = this.state.columns[destination.droppableId]

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      };

      this.setState(newState);
      return
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };
    this.setState(newState)
  };

    async componentDidMount(){
        // console.log('active');
        // console.log(this.props.item.Name)
        // let AllHomePages=await GetAllHomePages();
        // let Name=AllHomePages[1].Name;
        let tasks = this.state.tasks;
        let columns = this.state.columns;
        let Description=await GetHomePageLoad(this.props.item.Name);
        // console.log(Description);
        let { Body,Header,Footer } =Description ;

        let i;var j=1;let BodyRecive={};
        for (i=0;i<Header.length;i++){
            let NewID='item-'+(j+i);
            let row = {
                'id':NewID,
                "ObjectType": Header[i].ObjectType,
                "Position": i,
                "Data": {
                    "Title": Header[i].Data['Title'],
                    "Data": Header[i].Data['Data']
                }
            };
            columns['column-1']['taskIds'].push(NewID);
            tasks[NewID] = row;
            j=j+i
        }
        for (i=0;i<Body.length;i++){
            let NewID='item-'+(j+i);
            let row = {
                'id':NewID,
                "ObjectType": Body[i].ObjectType,
                "Position": i,
                "Data": {
                    "Title": Body[i].Data['Title'],
                    "Data": Body[i].Data['Data']
                }
            };
            columns['column-2']['taskIds'].push(NewID);
            tasks[NewID] = row;
            j=j+i
        }
        for (i=0;i<Footer.length;i++){
            let NewID='item-'+(j+i);
            let row = {
                'id':NewID,
                "ObjectType": Footer[i].ObjectType,
                "Position": i,
                "Data": {
                    "Title": Footer[i].Data['Title'],
                    "Data": Footer[i].Data['Data']
                }
            };
            columns['column-3']['taskIds'].push(NewID);
            tasks[NewID] = row;
            j=j+i
        }
        this.setState({
            tasks, columns
        },()=>{
            // console.log(this.state.tasks)
            // console.log(this.state.columns)
        })
        // console.log(BodyRecive)
    }

    HandelAdd( column){
        // console.log(column)


        const newState = {
            ...this.state,
            add:true,
            column
        };

        this.setState(newState);
    }
    toggleAdd = () => {
        this.setState(prevState => ({
            add: !prevState.add
        }));
    };
    handelEditComponent(value, Kind, Type, Position) {
        console.log('Value');
        console.log(value);
        console.log('Kind');
        console.log(Kind);
        console.log('Type');
        console.log(Type);
        console.log('Position');
        console.log(Position);
        let newValue = {
            id: Kind,
            ObjectType: Type,
            Position: Position,
            Data: {
                Title: value['Name'] || value['Title'],
                Data: value['Items'] || value['Data'] || [{Image: value['Image'], Name: "Category",}],
            }
        };
        const newState = {
            ...this.state,
            tasks: {
                ...this.state.tasks,
                [Kind]: newValue,
            }
        };
        this.setState(newState)
    }
    handelAddComponent(value,Title) {
        // console.log('get value from modal');
        // console.log(value);
        // console.log('get tilte from modal');
        // console.log(Title);
        const tasks = this.state.tasks;
        let number = Object.keys(tasks).length+1;
         let columns  = this.state.columns ;
         let NewID="item-" + `${number}`;

         // console.log(columns['column-1']['taskIds']);
        // columns['column-1']['taskIds'].push(NewID);

        console.log(columns[this.state.column]['taskIds']);
        columns[this.state.column]['taskIds'].push(NewID);

        // let label="task-" + '4';
        // let value="task-" + '4';
        // console.log('data items');
        // console.log(value['Items']);
        //   Name: "sghfdshdhj", Items:

        let newValue = {id: NewID,
            ObjectType: Title,
            Position: number,
            Data: {
                Title: value['Name'] || value['Title'],
                Data:value['Items'] ||value['Data'] ||[{Image:value['Image'], Name: "Category",}],
            }};
        // console.log('newValue');
        // console.log(newValue );
        tasks[NewID] = newValue ;
        // console.log(tasks)
        this.setState({
            tasks, columns
        }, () => {
            let NewData = {};
            NewData['tasks'] = this.state.tasks;
            NewData['columns'] = this.state.columns;
            this.setState({
                NewData
            });
        });
        this.toggleAdd();

    }
    handelChangeText(e){
        this.setState({
            header:e.target.value
        })
    }

    handelDeleteItems(item){
        // console.log(item);
        let tasks = this.state.tasks;
        tasks[item].ObjectType='Deleted';
        this.setState({
            tasks
        },()=>{
            console.log(this.state)
        })

        // let NewData={};
        // NewData['tasks']=this.state.tasks;
        // NewData['columns']=this.state.columns;
        // this.setState({
        //     NewData
        // },()=>{
        //     // console.log(this.state.NewData['tasks']);
        //
        //     let tasks = this.state.tasks;
        //     let {NewData}=this.state;
        //     let newDataTask = NewData['tasks'];
        //     let objectType = newDataTask[item].ObjectType;
        //     console.log(objectType);
        //     tasks[item].ObjectType='Deleted';
        //     // newDataTask[item].ObjectType=objectType;
        //     this.setState({
        //         tasks
        //     },()=>{
        //         console.log(this.state );
        //         newDataTask[item].ObjectType=objectType;
        //         this.setState({
        //             NewData
        //         })
        //
        //
        //     })
        // });
        // let tasks=this.state.tasks;
        // tasks[item].ObjectType='Deleted';
        // this.setState({
        //     tasks
        // },()=>{
        //     console.log(this.state.NewData)
        // })

        // console.log(tasks[item] );



    }
    handelDeleteUndo(item){
        // console.log(item);
        let newDataTask=this.state.NewData['tasks'];
        // console.log(newDataTask);
        let tasks=this.state.tasks;
        tasks[item].ObjectType='Category';
        // console.log( newDataTask[item].ObjectType );
        // console.log( tasks[item].ObjectType);
        this.setState({
            tasks
        })


    }
    HandelActive(){
        console.log(this.props.item.Name);
        let data=ActiveHomePages(this.props.item.Name);
        // console.log(data);

    }
   async HandelSend(){
        let {columns, tasks} = this.state;

        let Headers = [];
        let Body = [];
        let Footer = [];
        // console.log("header");
        let HeaderItems = columns['column-1']['taskIds'];
        let BodyItems = columns['column-2']['taskIds'];
        let FooterItems = columns['column-3']['taskIds'];
        HeaderItems.map(item => (
            Headers.push(tasks[item])
        ));
        BodyItems.map(item => (
            Body.push(tasks[item])
        ));
        FooterItems.map(item => (
            Footer.push(tasks[item])
        ));
        console.log(Headers);
        console.log(Body);
        console.log(Footer);
        let i;

        let HeaderFinal = [];
        let BodyFinal = [];
        let FooterFinal = [];
        let row;
        for (i = 0; i < Headers.length; i++) {
            row = {
                "ObjectType": Headers[i].ObjectType,
                "Position": i,
                "Data": {
                    "Title": Headers[i].Data['Title'],
                    "Data": []
                }
            };
            HeaderFinal.push(row)
        }

        for (i = 0; i < Body.length; i++) {
            row = {
                "ObjectType": Body[i].ObjectType,
                "Position": i,
                "Data": {
                    "Title": Body[i].Data['Title'],
                    "Data": []
                }
            };
            BodyFinal.push(row)
        }
        for (i = 0; i < Footer.length; i++) {
            row = {
                "ObjectType": Footer[i].ObjectType,
                "Position": i,
                "Data": {
                    "Title": Footer[i].Data['Title'],
                    "Data": []
                }
            };
            FooterFinal.push(row)
        }
        // console.log(HeaderFinal);
        // console.log(BodyFinal);
        // console.log(FooterFinal);

        //
        let Data={
            "Name": this.state.header,
            "Header":HeaderFinal,
            "Body": BodyFinal,
            "Footer":FooterFinal
        };
        // console.log(Data);
       let AddHomePage=await AddHomePages(this.state.header);
       // console.log(AddHomePage);
       let sendHomePages=await UpdateHomePage(JSON.stringify(Data));
       // console.log(sendHomePages)

    }
    async DeleteHomePage(){

// let response=DeleteHomePages()
    }

  render() {
    let {columns}=this.state;

    console.log(this.state.tasks );

    return (
        <div className='col-4 '>
            <div className=' w-100 d-flex align-items-center h-3vh'  >
                <span className='ml-2 mr-2 h-100 d-flex align-items-center'>Name: </span>
                <span>{this.props.item.Name}</span>
                <button className='ml-auto btn btn-danger' onClick={this.DeleteHomePage.bind(this)}>Delete</button>
                {/*<input type='text' onChange={this.handelChangeText.bind(this)} value={this.state.header} className='border-0 h-100'/>*/}
            </div>
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Container>
                    {this.state.columnOrder.map(columnId => {
                        const column = this.state.columns[columnId];
                        // console.log(column.id);
                        const tasks = column.taskIds.map(
                            taskId => this.state.tasks[taskId]
                        );

                        return (
                            <Column key={column.id} column={column} tasks={tasks} HandelAdd={this.HandelAdd.bind(this)}
                                    handelEditComponent={this.handelEditComponent.bind(this)}
                                    handelDeleteItems={this.handelDeleteItems.bind(this)} handelDeleteUndo={this.handelDeleteUndo.bind(this)}/>
                        )
                    })}
                </Container>

                {/*<button onClick={this.HandelSend.bind(this)}>send</button>*/}
                <button onClick={this.HandelActive.bind(this)}>active</button>

                <Modal
                    isOpen={this.state.add}
                    size="lg"
                    toggle={this.toggleAdd}
                >
                    <ModalHeader toggle={this.toggleAdd}>
                        add new Component

                    </ModalHeader>
                    <ModalBody>
                        <AddNewHomePageComponent addComPonent={this.handelAddComponent.bind(this)}/>
                    </ModalBody>
                </Modal>
            </DragDropContext>
        </div>

    )
  }
}

