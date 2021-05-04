function EditPlant() {
    
    // const[price, setPrice] = useState('')
  
    // function handleName(e){
    //     setName(e.target.value)
    // }

    //   function handleSubmit(e){
    //   e.preventDefault()
  
    //   const newPlant = {
    //       price
    //   }
       
    //   fetch('http://localhost:6001/plants', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //         },
    //       body: JSON.stringify(newPlant)
    //      })
    //     .then(res => res.json())
    //     .then(newPlant => {
    //       onHandleSubmitForm(newPlant)})
    //       setName(" ")
    //       setImage(" ")
    //       setPrice(" ")
  
    // }
  
    return (
      <div>
        <p>Edit Plant</p>
        <form 
        // onSubmit={handleSubmit}
        >
          <input type="number" name="price" step="0.01" placeholder="Price" 
        //   value={price} onChange={handlePrice}
          />
          <button type="submit">Edit Plant</button>
        </form>
      </div>
    );
  }

  
  export default EditPlant;
  