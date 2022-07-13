import React, {useState} from 'react'
import Card from './Card'

const Cards = () => {

  const [items, setItems] = useState([
    {id: 1, name: 'cat', image: '/img/cat.jpg', state:''},
    {id: 1, name: 'cat', image: '/img/cat.jpg', state:''},
    {id: 2, name: 'dog', image: '/img/dog.jpg', state:''},
    {id: 2, name: 'dog', image: '/img/dog.jpg', state:''},
    {id: 3, name: 'eagle', image: '/img/eagle.jpg', state:''},
    {id: 3, name: 'eagle', image: '/img/eagle.jpg', state:''},
    {id: 4, name: 'goldenfish', image: '/img/goldenfish.jpg', state:''},
    {id: 4, name: 'goldenfish', image: '/img/goldenfish.jpg', state:''},
    {id: 5, name: 'jellyfish', image: '/img/jellyfish.jpg', state:''},
    {id: 5, name: 'jellyfish', image: '/img/jellyfish.jpg', state:''},
    {id: 6, name: 'owl', image: '/img/owl.jpg', state:''},
    {id: 6, name: 'owl', image: '/img/owl.jpg', state:''},
    {id: 7, name: 'rhino', image: '/img/rhino.jpg', state:''},
    {id: 7, name: 'rhino', image: '/img/rhino.jpg', state:''},
    {id: 8, name: 'tiger', image: '/img/tiger.jpg', state:''},
    {id: 8, name: 'tiger', image: '/img/tiger.jpg', state:''}
  ].sort(() => Math.random() -0.5 ))  

  const [prev, setPrev] = useState(-1)


  const handleClick = (index) => {
    console.log(index)

    if (prev === -1) {
      items[index].state = 'active'      
      setItems([...items])
      setPrev(index)
    } else {
      check(index)
    }

  }

  const check = (current) => {
    if (items[current].id === items[prev].id) {
      items[current].state = 'correct'
      setPrev(-1)
    } else {
      items[current].state = 'wrong'
      setItems([...items])
      setTimeout(()=>{
        items[current].state = ''
        items[prev].state = ''
        setItems([...items])
        setPrev(-1)
      },300)
    }
  }

  return (
    <div className='cards-container'>
      {items.map((item, index) => (
        <Card key={index} item={item} id={item.id} index={index} handleClick={handleClick} />
      ))}
    </div>
  )
}

export default Cards