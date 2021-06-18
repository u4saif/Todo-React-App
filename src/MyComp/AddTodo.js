import{ useState } from 'react';

export const AddTodo = (props) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    function addItem(){
        props.addTodo(title,desc); 
                settitle("");
                setdesc("");
    }
    let submit=(e)=>{
        e.preventDefault();
        (!title || !desc) ? alert(" Title or Discription can't be blank"): addItem();
       
    }
  return (
    <div className="container rounded border border-primary py-3 my-3">
        <h3 className="mb-3"> Add a Todo. </h3>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="title"><strong> Todo Title </strong></label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="title"
            value={title}
            onChange={(e)=>{settitle(e.target.value)}}
          /> 
        </div>
        <div >
          <label htmlFor="desc"><strong> Discription</strong> </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="discription"
            value={desc}
            onChange={(e)=>setdesc(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Add Work item.
        </button>
      </form>
    </div>
  );
};
