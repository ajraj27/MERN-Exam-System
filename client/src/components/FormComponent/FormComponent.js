import React ,{Component} from 'react';
import axios from "axios";
import Input from '../IndividualComponent/Input';
import CheckOrRadio from '../IndividualComponent/CheckOrRadio';
import TextArea from '../IndividualComponent/TextArea';

class FormComponent extends Component {
    constructor(){
        super();
        this.state={
            capital:'',
            selectedTeams:[],
            selectedPM:[],
            selectedOddOne:[],
            selectedLinuxOS:[],
            description:''
        }
    }

    componentWillMount= async () => {
        const doc=await axios.get("/getData");
        if(doc.data)
            this.setState(doc.data);
    }


    changeCapitalHandler=(e) => {
        this.setState({capital:e.target.value});
    }

    changeTeamsHandler=(e) => {
        const newSelection = e.target.value;
        let newSelectionArray;
        if(this.state.selectedTeams.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.selectedTeams.filter(s => s !== newSelection)
        } else {
            newSelectionArray = [...this.state.selectedTeams, newSelection];
        }
        this.setState({ selectedTeams: newSelectionArray });
    }

    changePMHandler=(e) => {
        const newSelection = e.target.value;
        let newSelectionArray;
        if(this.state.selectedPM.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.selectedPM.filter(s => s !== newSelection)
        } else {
            newSelectionArray = [...this.state.selectedPM, newSelection];
        }
        this.setState({ selectedPM: newSelectionArray });
    }

    changeOddHandler=(e) => {
        this.setState({selectedOddOne:[e.target.value]});
    }

    changeLinuxHandler=(e) => {
        this.setState({selectedLinuxOS:[e.target.value]});
    }

    changeDescHandler=(e) => {
        this.setState({description:e.target.value});
    }

    onSubmit=(e) => {
       e.preventDefault();

       axios({
           method:"post",
           url:"/saveData",
           data:this.state
       });

       this.props.history.push("/acknowledgement")
    }

    render(){
        const obj=this.state;
        let allowed=1;

        for(const key of Object.keys(obj)){
            
            if((typeof obj[key])==="string")
                allowed=obj[key].trim(" ").length && allowed;
            else
                allowed=obj[key].length && allowed;

        }

        return(
            <div className="row bg-danger">
                <div className="col-md-4 offset-md-4">
                    <div className="card m-3">
                        <h1 className="card-header text-center bg-primary text-white">TEST</h1>
                        <div class="card-body">
                            <form noValidate onSubmit={this.onSubmit}>
                                <Input
                                title="1. What is the capital of Australia?" 
                                name="capitalName" 
                                type="text" 
                                content={this.state.capital} 
                                controlFunc={this.changeCapitalHandler} />

                                <CheckOrRadio 
                                title="2. Who among these have won the ICC World Cup atleast twice?"
                                setName="teams"
                                type="checkbox"
                                options={["West Indies","Pakistan","Australia","India"]}
                                selectedOptions={this.state.selectedTeams}
                                controlFunc={this.changeTeamsHandler}
                                />

                                <CheckOrRadio 
                                title="3. Who were the PM of India?"
                                setName="PM"
                                type="checkbox"
                                options={["Atal Bihari Vajpayee","Pranav Mukherjee","Sonia Gandhi","Chandra Shekhar"]}
                                selectedOptions={this.state.selectedPM}
                                controlFunc={this.changePMHandler}
                                />

                                <CheckOrRadio 
                                title="4. Pick the odd one out."
                                setName="oddOne"
                                type="radio"
                                options={["Man Utd","Liverpool","Arsenal","AC Milan"]}
                                selectedOptions={this.state.selectedOddOne}
                                controlFunc={this.changeOddHandler}
                                />

                                <CheckOrRadio 
                                title="5. Which among these is not a Linux based OS?"
                                setName="linuxOS"
                                type="radio"
                                options={["Ubuntu","Mint","ElementaryOS","MacOS"]}
                                selectedOptions={this.state.selectedLinuxOS}
                                controlFunc={this.changeLinuxHandler}
                                />

                                <TextArea
                                title="6. What do you think about the current political situation of India?"
                                rows={5}
                                resize={false}
                                content={this.state.description}
                                name="desc"
                                controlFunc={this.changeDescHandler}
                                placeholder={'Please be thorough in your description.'} />
                                
                                <div className="text-center">
                                    <button 
                                    disabled={allowed===0?true:false}
                                    className="btn btn-primary btn-lg" 
                                    type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
           
        );
    }
}

export default FormComponent;