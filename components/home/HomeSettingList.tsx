import { useState } from "react";

import { Flex } from "@chakra-ui/layout";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { Divider } from "../common";
import { HamburgerIcon } from "../icons";
type Category = {
  content: string;
  id: string;
};

type HomeSettingListProps = {
  categoryList: Category[];
};

const HomeSettingList: React.FC<HomeSettingListProps> = ({ categoryList }) => {
  const [categoryListState, setCategoryListState] = useState(categoryList);

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(categoryListState);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCategoryListState(items);
  };
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="categories">
        {provided => (
          <ul
            className="categories"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {categoryList.map(({ id, content }, index) => (
              <Draggable key={id} draggableId={id} index={index}>
                {provided => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Flex
                      key={String(id)}
                      color={"grey.900"}
                      justifyContent={"space-between"}
                      mb={4}
                      mt={4}
                    >
                      {content}
                      <HamburgerIcon {...provided.dragHandleProps} />
                    </Flex>
                    <Divider />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default HomeSettingList;
