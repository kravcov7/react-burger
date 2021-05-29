import React, { useRef } from "react";
import styles from "./burger-constructor-elements.module.css";
import cn from 'classnames'
import PropTypes from 'prop-types';

import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import { useDrag, useDrop } from 'react-dnd';

function BurgerConstructorElements({ item, index, moveItem, deleteItem}) {
  console.log(index);
  const id = item._id
  const ref = useRef(null);
  
  const [, drop] = useDrop({
    accept: 'item',
		collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
			};
		},
		hover(el, monitor) {
      if (!ref.current) {
        return;
			}
			const dragIndex = el.index;
			const hoverIndex = index;
			if (dragIndex === hoverIndex) {
        return;
			}
			const hoverBoundingRect = ref.current?.getBoundingClientRect();
			const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			const clientOffset = monitor.getClientOffset();
			const hoverClientY = clientOffset.y - hoverBoundingRect.top;
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        console.log('hoverClientY')
				return;
			}
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}
      moveItem(dragIndex, hoverIndex);
			el.index = hoverIndex;
		},
	});
  const [{ isDrag }, drag] = useDrag({
		type: 'item',
		item: () => {
			return { id, index };
		},
		collect: (monitor) => ({
			isDrag: monitor.isDragging(),      
		}),
	});
  drag(drop(ref))

  return (
    <li ref={ref} className={cn(styles.item, "mb-5")}>
      <DragIcon type="primary" />
      <ConstructorElement text={item.name} price={item.price} thumbnail={item.image} handleClose={deleteItem} />
    </li>
  );
}

BurgerConstructorElements.propTypes = {
	item: PropTypes.shape({
		calories: PropTypes.number.isRequired,
		carbohydrates: PropTypes.number.isRequired,
		fat: PropTypes.number.isRequired,
		image_large: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		image_mobile: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		productId: PropTypes.string.isRequired,
		proteins: PropTypes.number.isRequired,
		type: PropTypes.string.isRequired,
		__v: PropTypes.number,
		_id: PropTypes.string.isRequired,
	}).isRequired,
	moveItem: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
	deleteItem: PropTypes.func.isRequired,
}


export default BurgerConstructorElements;
