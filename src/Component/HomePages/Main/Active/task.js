import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'
import SLiderItemsHomePagePreview from "../Edit/PreviewHomePages/Components/SLiderItemsHomePagePreview";
import CategoriesPreviewHomePages from "../Edit/PreviewHomePages/Components/CategoriesPreviewHomePages";
import PackagePreviewHomePages from "../Edit/PreviewHomePages/Components/PackagePreviewHomePages";
import SliderHomePagesPreview from "../Edit/PreviewHomePages/Components/SliderHomePagesPreview";
import BannerHomePagePreview from "../Edit/PreviewHomePages/Components/BannerHomePagePreview";
import {Card} from "reactstrap";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
    props.isDragDisabled
      ? 'lightgrey'
      : props.isDragging
        ? 'lightgreen'
        : 'white'};
`

export default class Task extends React.Component {


    ChangeComponent(Name,Type,Position){

    }

  render() {
    // const isDragDisabled = this.props.task.id === 'task-1'
    //   let {task}=this.props;
      let item =this.props.task;
      // let item=task.content;
    return (
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}
        // isDragDisabled={isDragDisabled}

      >
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            // isDragDisabled={isDragDisabled}
          >


              {item.ObjectType==="ItemList"?<SLiderItemsHomePagePreview items={item.Data} position={item.Position} ChangeComponent={this.ChangeComponent.bind(this)}/>:""}
              {item.ObjectType==="Category"?<CategoriesPreviewHomePages  items={item.Data}  position={item.Position} ChangeComponent={this.ChangeComponent.bind(this)}/>:""}
              {item.ObjectType==="Package"?<PackagePreviewHomePages  items={item.Data}  position={item.Position} ChangeComponent={this.ChangeComponent.bind(this)}/>:""}
              {item.ObjectType==="Slider"?<SliderHomePagesPreview  items={item.Data}/>:""}
              {item.ObjectType==="Banner"?<BannerHomePagePreview  items={item.Data}  position={item.Position} ChangeComponent={this.ChangeComponent.bind(this)}/>:""}
              {item.ObjectType==="HeaderSlider"?<SliderHomePagesPreview  items={item.Data}/>:""}
            {/*{this.props.item.content}*/}
          </Container>
        )}
      </Draggable>
    )
  }
}
