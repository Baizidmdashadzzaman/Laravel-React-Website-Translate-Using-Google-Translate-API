import React ,{ useRef ,useState ,useEffect} from 'react';
import ReactQuill from 'react-quill';
import parse from 'html-react-parser';
import Swal from 'sweetalert2'
import axios from 'axios';
import Pagination from "react-js-pagination";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    browserHistory     
} from "react-router-dom";

function TextEditor() {
  const [textdata, settextdata] = useState("");
  const [title, settitle] = useState("");
  const [subbtn, setsubbtn] = useState(false);
  
  let handleChange=(value)=> {
    settextdata(value)
    console.log(value)
  }

  let submitHandler = (e) => {
    setsubbtn(true);
    e.preventDefault();
    const data = new FormData() 
    data.append('title', title)
    data.append('description', textdata)
    axios.post("/api/textarea-store", data)
    .then((response) => {
      setsubbtn(false);
      if (response.data.status === 1) {
        settitle("");
        settextdata("");
        fetchData();
        Swal.fire(
          'Success',
           response.data.message,
          'success'
        )
    }
    else
        {
          Swal.fire(
            'Sorry',
             response.data.message,
            'error'
          )
          setContactbtn(0);
        }
    })
    .catch((error) => {
        console.error(error);
    });
}


const [alldata, setalldata] = useState([]);
const [alldataAll, setalldataAll] = useState([]);


useEffect(() => {
  fetchData();
}, []);

let fetchData = async (pageNumber = 1) => {
 axios
 .get(`/api/textarea-list?page=${pageNumber}`)
 .then((response) => {
   setalldata(response.data.allData.data);
   setalldataAll(response.data.allData);
 })
 .catch((error) => {
   console.error(error);
 });


};

  return (
    <div className="container">
    <div className="row justify-content-center" style={{paddingBottom:'50px'}} >
        <div className="col-md-8">
            <div className="card" >
                <div className="card-header"><b>Text editor with image upload</b></div>
                <div className="card-body">
                
                <form onSubmit={submitHandler}> 
                    <p>Title</p>
                    <hr/>
                    <input type="text" value={title} className='form-control' name='title' onChange={(e)=>{settitle(e.target.value)}} />
                    <br/>
                    <p>Description</p>
                    <hr/>
                    <ReactQuill value={textdata} onChange={handleChange} 
                       modules={{
                        toolbar: {
                            container: [
                                [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
                                [{ size: [] }],
                                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                [{ list: 'ordered' }, { list: 'bullet' }],
                                ['link', 'video'],
                                ['link', 'image', 'video'],
                                ['clean'],
                                ['code-block']
                            ],
                            // handlers: {
                            //     image: this.imageHandler
                            // }
                        }
                    }}
                    />
                    <hr/>
                    <button type='submit' className='btn btn-primary btn-block'>
                        { subbtn == false ? ( 'Submit' ) : ( 'Please wait ...' ) }
                    </button>
                </form>    
                </div>
            </div>

            <div className="card">
                <div className="card-header"><b>Textarea data</b></div>
                <div className="card-body">
                <table class="table table-hover">
                 <thead>
                   <tr>
                     <th scope="col">ID</th>
                     <th scope="col">Title</th>
                     <th scope="col">View</th>
                   </tr>
                 </thead>
                 <tbody>
                 { alldata.map((singledata) => ( 
                   <tr key={singledata.id}>
                     <th scope="row">{singledata.id}</th>
                     <td>{singledata.title}</td>
                     <td><Link to={"/text-editor/view/"+singledata.id} className="btn btn-primary" >Show</Link></td>
                   </tr>
                 ))}
                 </tbody>
                 
               </table>
               <Pagination
                                    activePage={alldataAll?.current_page ? alldataAll?.current_page : 0}
                                    itemsCountPerPage={alldataAll?.per_page ? alldataAll?.per_page : 0 }
                                    totalItemsCount={alldataAll?.total ? alldataAll?.total : 0}
                                    onChange={(pageNumber) => {
                                        fetchData(pageNumber)
                                    }}
                                    pageRangeDisplayed={8}
                                    itemClass="page-item"
                                    linkClass="page-link"
                                    firstPageText="First"
                                    lastPageText="Last"
                                    height="10px"
                                />
                </div>
             
               
            </div>
        </div>
    </div>
    </div>
  )
}

export default TextEditor