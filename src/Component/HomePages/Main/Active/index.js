import React from 'react'
import ReactDOM from 'react-dom'
// import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'
import {UpdateHomePage} from "../../../functions/ServerConnection";

import initialData from './initial-data'
import Column from './column'
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import AddNewHomePageComponent from "../Edit/AddNewHomePageComponent/AddNewHomePageComponent";

const Container = styled.div`
  display:flex;
`

export default class MoveRowIndex extends React.Component {
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
    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)
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

    HandelAdd(){



        const newState = {
            ...this.state,
            add:true
        };

        this.setState(newState);
    }
    toggleAdd = () => {
        this.setState(prevState => ({
            add: !prevState.add
        }));
    };
    handelAdd(){
        const tasks = this.state.tasks;
        let columns  = this.state.columns ;

        console.log(columns['column-1']['taskIds']);
        columns['column-1']['taskIds'].push('task-4');

        let label="task-" + '4';
        let value="task-" + '4';


         let newtask = "task-" + '4';
        let newValue = { id: 'task-4', content: 'arsenal is the best' };

        tasks[newtask] = newValue ;
        // console.log(tasks)
        this.setState({
            tasks, columns
        })

        // let newValue=    'task-3': { id: 'task-4', content: 'Cook dinner' }

    }
    handelAddComponent(value,Title) {
        console.log('get value from modal');
        console.log(value);
        console.log('get tilte from modal');
        console.log(Title);
        const tasks = this.state.tasks;
        let number = Object.keys(tasks).length+1;

         let columns  = this.state.columns ;
         let NewID="item-" + `${number}`;

        console.log(columns['column-1']['taskIds']);
        columns['column-1']['taskIds'].push(NewID);

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
                // Data: [{
                //     _id: "id",
                //     Image: "http://chichiapp.ir:3005/download/5d9884457c1e36d6e452598e",
                //     Position: 0,
                //     DestinationId: "Id"
                // }, {
                //     _id: "id",
                //     Image: "http://chichiapp.ir:3005/download/5d9884457c1e36d6e452598e",
                //     Position: 1,
                //     DestinationId: "Id"
                // }, {
                //     _id: "id",
                //     Image: "http://chichiapp.ir:3005/download/5d9884457c1e36d6e452598e",
                //     Position: 2,
                //     DestinationId: "Id"
                // }, {
                //     _id: "id",
                //     Image: "http://chichiapp.ir:3005/download/5d9884457c1e36d6e452598e",
                //     Position: 3,
                //     DestinationId: "Id"
                // }]
            }};
        console.log('newValue');
        console.log(newValue );
        tasks[NewID] = newValue ;
        // console.log(tasks)
        this.setState({
            tasks, columns
        })


        //
        // Data: {Title: "برترین ها", Data: Array(10)}
        // ObjectType: "ItemList"
        // Position: 5

        this.toggleAdd();


        // this.setState(prev=>({
        //     items: [...prev.items, {'id':this.state.Lenght+1,'content':this.state.NewItem}],
        //     Lenght:prev.Lenght+1
        //     // items:prev.items
        // }));
    }

   async HandelSend(){
        let {columns, tasks} = this.state;
        // console.log(this.state.columns);
        //         // console.log(this.state.tasks);
        let Headers = [];
        let Body = [];
        let Footer = [];
        console.log("header");
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
        // Data: {Title: "برترین ها", Data: Array(10)}
        // ObjectType: "ItemList"
        // Position: 1
        // id: "item-1"
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
        console.log(HeaderFinal);
        console.log(BodyFinal);
        console.log(FooterFinal);

        //
        let Data={
            "Name": "ehsan",
            "Header":HeaderFinal,
            "Body": BodyFinal,
            "Footer":FooterFinal
        };
        console.log(Data)

       // let sendHomePages=await UpdateHomePage(JSON.stringify(Data));
       // console.log(sendHomePages)

    }
  render() {
    let {columns}=this.state;
    // console.log(columns);

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Container>
          {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(
              taskId => this.state.tasks[taskId]
            );

            return (
              <Column key={column.id} column={column} tasks={tasks} />
            )
          })}
        </Container>
          {/*<button onClick={this.HandelAdd.bind(this)}>add</button>*/}
          <button onClick={this.HandelAdd.bind(this)}>add</button>
          <button onClick={this.HandelSend.bind(this)}>send</button>

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
    )
  }
}

