const LinkedList=require('./linkedList')

class QueueLinkedList{
  constructor(){
    this.list=new LinkedList()
  }
  enqueue(value){
    return this.list.append(value)
  }

  dequeue(){
    return this.list.removeFromStart()
  }

  peek(){
    return this.list.head.value
  }

  isEmpty(){
    return this.list.isEmpty()
  }

  getSize(){
    return this.list.getSize()
  }
  print(){
    this.list.print()
  }
}

const queue=new QueueLinkedList()

queue.print()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.print()
queue.dequeue()

queue.isEmpty()

console.log(queue.getSize())

console.log(queue.peek())