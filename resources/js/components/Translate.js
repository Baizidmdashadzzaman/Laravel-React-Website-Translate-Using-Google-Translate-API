import React, { useState ,useEffect} from "react";
import { useSpeechSynthesis } from "react-speech-kit";

function Translate() {
    const [value, setValue] = useState("Hi my name is asad zaman. visit my site at baizidmdashadzzaman-next.vercel.app. Also visit my github at github.com/Baizidmdashadzzaman");
    const { speak , cancel} = useSpeechSynthesis();

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({ pageLanguage: 'en', layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 'google_translate_element')
       }
       
       useEffect(() => {
         var addScript = document.createElement('script');
         addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
         document.body.appendChild(addScript);
         window.googleTranslateElementInit = googleTranslateElementInit;
       }, [])

  return (
    <div className="container">
    <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-header"><b>Chanage website language</b></div>
                <div className="card-body">
                    <p>Change language of website form bellow</p>
                    <div id="google_translate_element"></div>
    <div className="speech">
      <br/>
      <div className="group">
        <h3>{value}</h3>
      </div>
      <div className="group">
        
      </div>
    </div>
                </div>
            </div>
        </div>
    </div>
    <br/><br/><br/>
    </div>
  )
}

export default Translate