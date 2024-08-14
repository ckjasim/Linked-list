const LinkedList=require('./linkedList')


class LinkedListStack{
  constructor(){
    this.list=new LinkedList()
  }
  
  isEmpty(){
   return this.list.isEmpty()
  }

  getSize(){
   return this.list.getSize()
  }

  push(value){
    return this.list.prepend(value)
  }
  pop(){
    return this.list.removeFromStart()
  }
  peek(){
    return this.list.head.value
  }
  print(){
    return this.list.print()
  }


}

const stack=new LinkedListStack()

console.log(stack.isEmpty())

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.print()

console.log(stack.pop())
console.log(stack.peek())
stack.print()