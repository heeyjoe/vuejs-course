async function loadData(){
  try{
    let response = await fetch("https://jsonplaceholder.typicode.com/userss");
    const data = await response.json();

    for(const item of data) {
      console.log(item);
    }
  }
  catch(error) {
    console.log(error.message);
    console.log("O programa falhou, contate o administrador");
  }
  finally{
    console.log("Finally executou");
  }
}

loadData();
