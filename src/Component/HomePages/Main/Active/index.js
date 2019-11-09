import React from 'react'
import ReactDOM from 'react-dom'
// import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'

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
    const { destination, source, draggableId } = result

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
      const newTaskIds = Array.from(start.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

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

    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
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
    handelAddComponent(value,Title) {
        console.log(value);
        console.log(Title);

        this.toggleAdd();
        // this.setState(prev=>({
        //     items: [...prev.items, {'id':this.state.Lenght+1,'content':this.state.NewItem}],
        //     Lenght:prev.Lenght+1
        //     // items:prev.items
        // }));
    }
  render() {
    let {columns}=this.state;
    console.log(columns);

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Container>
          {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId]
            const tasks = column.taskIds.map(
              taskId => this.state.tasks[taskId]
            );

            return (
              <Column key={column.id} column={column} tasks={tasks} />
            )
          })}
        </Container>
          <button onClick={this.HandelAdd.bind(this)}>add</button>

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

