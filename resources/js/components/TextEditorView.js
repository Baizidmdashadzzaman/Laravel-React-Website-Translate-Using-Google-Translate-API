import React ,{ useRef ,useState ,useEffect} from 'react';
import parse from 'html-react-parser';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    browserHistory,
    useParams     
} from "react-router-dom";

function TextEditorView() {
  const params = useParams()
  const id = params.id;

  const [pagedatatitle, setpagedatatitle] = useState("");
  const [description, setdescription] = useState("");
  
  useEffect(() => {
    fetchData();
  }, [id]);
  
  let fetchData = () => {
   axios
   .get('/api/textarea-view/'+id)
   .then((response) => {
    //console.log(response);
    setpagedatatitle(response.data.allData.title);
    setdescription(response.data.allData.description);
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
                <div className="card-header"><b>Text editor with image upload ( view )</b></div>
                <div className="card-body">
                    <Link to="/text-editor" className='btn btn-primary' style={{float:'right'}}>Back to text editor</Link>
                    <br/>
                    <h3>Title : <b>{pagedatatitle}</b></h3>
                    <hr/>
                    <p>
                      {parse(description)}
                    </p>
                       
                </div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default TextEditorView