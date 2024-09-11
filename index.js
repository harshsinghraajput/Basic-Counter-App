const countValue=document.querySelector('#counter');

const increment = () => {
      //Get the value from the UI
      let value= parseInt(countValue.innerText);
      //Update the value in the UI
      value+=1;
      //Set the value in the UI
      countValue.innerText = value;
};


const decrement = () => {
      //Get the value from the UI
      let value= parseInt(countValue.innerText);
      //Update the value in the UI
      value-=1;
      //Set the value in the UI
      countValue.innerText = value;
};

const reset = () => {
    //Get the value from the UI
    let value= parseInt(countValue.innerText);
    //Update the value in the UI
    value = 0;
    //Set the value in the UI
    countValue.innerText = value;
};
