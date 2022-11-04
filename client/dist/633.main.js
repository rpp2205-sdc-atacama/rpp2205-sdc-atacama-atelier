(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[633],{5633:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>g});var n=s(5466);const a=e=>React.createElement("div",{className:"search_container"},React.createElement("input",{className:"search_input",placeholder:"HAVE A QUESTION? SEARCH FOR ANSWERS…",onChange:t=>e.handleChangeSearch(t.target.value)}),React.createElement("i",{className:"fa-solid fa-magnifying-glass search_icon"}));var r=s(4559),o=s.n(r),i=s(6120),l=s(8212),c=s.n(l);const h=(0,i.Z)((e=>{const[t,s]=(0,n.useState)(""),[a,r]=(0,n.useState)(""),[i,l]=(0,n.useState)(""),[h,u]=(0,n.useState)(""),[d,m]=(0,n.useState)(!1),[p,w]=(0,n.useState)(!0),[E,b]=(0,n.useState)([]),[g,_]=(0,n.useState)(0),N=()=>{let e=0!==t.length,s=0!==a.length,n=0!==i.length,r=0!==h.length&&null!==(e=>String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))(h);return(e||s)&&n&&r};return n.createElement("div",{className:"modal_container"},n.createElement("div",{className:"modal_content"},n.createElement("span",{className:"modal_close",onClick:e.closeForm},"×"),void 0!==e.questionBody?n.createElement("h2",null,"Submit your Answer"):n.createElement("h2",null,"Ask Your Question"),void 0!==e.questionBody?n.createElement("h4",null,e.productName,": ",e.questionBody):n.createElement("h4",null,"About the ",e.productName),void 0!==e.questionBody?n.createElement("div",{className:"answer_body"},n.createElement("label",{className:"label_answer",htmlFor:"answer"},"Your Answer"),n.createElement("input",{className:"text_answer",maxLength:"1000",onChange:e=>{return t=e.target.value,void s(t);var t},name:"answer"})):n.createElement("div",null,n.createElement("label",{className:"label_question",htmlFor:"question"},"Your Question"),n.createElement("input",{className:"text_question",maxLength:"1000",onChange:e=>{return t=e.target.value,void r(t);var t},name:"question"})),n.createElement("label",{className:"label_nickname",htmlFor:"nickname"},"What is your nickname?"),n.createElement("input",{className:"nickname",placeholder:void 0!==e.questionBody?"Example: jack543!":"jackson11!",name:"nickname",maxLength:"60",onChange:e=>{return t=e.target.value,void l(t);var t}}),n.createElement("p",{className:"sub_text"},"For privacy reasons, do not use your full name or email address"),n.createElement("label",{htmlFor:"email",className:"label_email"},"Your Email"),n.createElement("input",{className:"email",onChange:e=>{return t=e.target.value,void u(t);var t},name:"email",placeholder:"Example: jack@email.com"}),n.createElement("p",{className:"sub_text"},"For authentication reasons, you will not be emailed"),void 0!==e.questionBody&&g<5&&n.createElement("div",{className:"upload_button"},n.createElement("label",{className:"upload_text"},n.createElement("input",{type:"file",onChange:e=>(e=>{let t=new FormData;t.append("file",e[0]),t.append("upload_preset",c().CLOUD_PRESET),o().post(`https://api.cloudinary.com/v1_1/${c().CLOUD_NAME}/image/upload`,t).then((e=>{let t=e.data.secure_url;b(E.concat(t)),_(g+1)})).catch((e=>{console.log("failed to upload the image")}))})(e.target.files),multiple:!0}),"Upload your photos")),E.map((e=>n.createElement("img",{key:e,src:e,className:"upload_image"}))),n.createElement("button",{className:"submit_button",onClick:s=>{e.interaction(s.target),N()&&(0!==t.length?o().post(`/qa/questions/${e.questionId}/answers`,{body:t,name:i,email:h,photos:E}).then((e=>{console.log("The form is sent to API successfully")})).catch((e=>{console.log("Failed to send the form")})):o().post("qa/questions",{body:a,name:i,email:h,product_id:e.productId}).then((e=>{console.log("The form is sent to API successfully")})).catch((e=>{console.log("Failed to send the form")})))}},void 0!==e.questionBody?"Submit answer":"Submit question"),p?n.createElement("div",{className:"sub_text"},"You must enter the following: ",(()=>{let s;return s=void 0!==e.questionBody?[["answer",0!==t.length],["nickname",0!==i.length],["email",d]]:[["question",0!==a.length],["nickname",0!==i.length],["email",d]],s.filter((e=>{if(!1===e[1])return e[0]}))})().map((e=>n.createElement("li",{key:e},e)))):n.createElement(n.Fragment,null)))}),"questions_answers");class u extends n.Component{constructor(e){super(e),this.state={helpfulness:e.question.question_helpfulness,isFormShown:!1,isYesClicked:!1},this.handleAddAnswer=this.handleAddAnswer.bind(this),this.handleIncreaseCounts=this.handleIncreaseCounts.bind(this),this.closeForm=this.closeForm.bind(this)}handleAddAnswer(e){this.props.interaction(e.target),this.setState({isFormShown:!0})}closeForm(){this.setState({isFormShown:!1})}handleIncreaseCounts(e){this.props.interaction(e.target),this.setState({isYesClicked:!0,helpfulness:this.state.helpfulness+1},(()=>{o().put(`/qa/questions/${this.props.question.question_id}/helpful`).then((e=>{if(204!==e.status)throw err})).catch((e=>{console.log("failed to increment counts")}))}))}render(){return n.createElement("div",{className:"question_container"},n.createElement("p",{className:"question"},"Q: ",this.props.question.question_body),n.createElement("div",{className:"helpful_container"},n.createElement("div",{className:"helpful_text"},"Helpful?"),n.createElement("button",{className:"yes_button",disabled:this.state.isYesClicked,onClick:this.handleIncreaseCounts},"Yes"),n.createElement("div",{className:"helpfulness_number"},"(",this.state.helpfulness,")"),n.createElement("div",{className:"border_line"}),n.createElement("button",{className:"add_answer_button",onClick:this.handleAddAnswer},"Add Answer")),this.state.isFormShown&&n.createElement(h,{productId:this.props.productId,questionId:this.props.question.question_id,questionBody:this.props.question.question_body,productName:this.props.productName,closeForm:this.closeForm}))}}const d=(0,i.Z)(u,"questions_answers");class m extends n.Component{constructor(e){super(e),this.state={helpfulness:e.answer.helpfulness,isYesClicked:!1,isReported:!1},this.handleReport=this.handleReport.bind(this),this.handleIncreaseCounts=this.handleIncreaseCounts.bind(this),this.handleDateFormat=this.handleDateFormat.bind(this)}handleReport(e){this.props.interaction(e.target),this.setState({isReported:!0},(()=>{o().put(`/qa/answers/${this.props.answer.answer_id}/report`).then((e=>{if(204!==e.status)throw err})).catch((e=>{console.log("failed to increment the count")}))}))}handleIncreaseCounts(e){this.props.interaction(e.target),this.setState({isYesClicked:!0,helpfulness:this.state.helpfulness+1},(()=>{o().put(`/qa/answers/${this.props.answer.answer_id}/helpful`).then((e=>{if(204!==e.status)throw err})).catch((e=>{console.log("failed to increment the count")}))}))}handleDateFormat(e){let t=new Date(e),s=t.getDate();return`${["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]} ${s}, ${t.getFullYear()}`}render(){let{body:e,answerer_name:t,date:s}=this.props.answer;return n.createElement("div",{className:"answer_container"},n.createElement("div",{className:"answer_symbol"},"A: ",n.createElement("span",{className:"answer_text"},e)),n.createElement("div",{className:"answer_sub"},n.createElement("div",{className:"by"},"by"),n.createElement("span",{className:"Seller"===t?"seller":"answerer"},"Seller"===t?"Seller":t),n.createElement("div",{className:"answer_date"},this.handleDateFormat(s)),n.createElement("div",{className:"border_line"}),n.createElement("div",{className:"helpful_text"},"Helpful?"),n.createElement("button",{className:"yes_button",disabled:this.state.isYesClicked,onClick:this.handleIncreaseCounts},"Yes"),n.createElement("div",{className:"helpfulness_number"},"(",this.state.helpfulness,")"),this.state.isReported?n.createElement("button",{disabled:this.state.isReported,className:"report_button",role:"button"},"Reported"):n.createElement("button",{className:"report_button",role:"button",onClick:this.handleReport},"Report")))}}const p=(0,i.Z)(m,"questions_answers");class w extends n.Component{constructor(e){super(e),this.state={answers:[],seeMoreAnswers:!1},this.getAnswers=this.getAnswers.bind(this),this.sortAnswers=this.sortAnswers.bind(this),this.handleViewMoreAnswers=this.handleViewMoreAnswers.bind(this),this.collapseAnswers=this.collapseAnswers.bind(this)}async componentDidMount(){let e=await this.getAnswers(),t=this.sortAnswers(e);this.setState({answers:t})}getAnswers(){let e=this.props.qa.question_id,t=Object.keys(this.props.qa.answers).length;return o().get(`/qa/questions/${e}/answers/${t}`).then((e=>e.data.results)).catch((e=>{console.log("Failed to retrieve answers for the question")}))}sortAnswers(e){let t=e.filter((e=>"Seller"===e.answerer_name)).sort(((e,t)=>t.helpfulness-e.helpfulness)),s=e.filter((e=>"Seller"!==e.answerer_name)).sort(((e,t)=>t.helpfulness-e.helpfulness));return t.concat(s)}handleViewMoreAnswers(e){this.props.interaction(e.target),this.setState({seeMoreAnswers:!0})}collapseAnswers(e){this.props.interaction(e.target),this.setState({seeMoreAnswers:!1})}render(){return n.createElement("div",{className:"QA_container"},n.createElement(d,{question:this.props.qa,productId:this.props.productId,productName:this.props.productName}),n.createElement("div",{className:this.state.seeMoreAnswers?"answers_expand_mode":void 0},this.state.answers.map(((e,t)=>{if(!(t>1))return n.createElement(p,{key:t,answer:e})})),this.state.seeMoreAnswers&&this.state.answers.map(((e,t)=>{if(!(t<2))return n.createElement(p,{key:t,answer:e})}))),this.state.answers.length>2&&!this.state.seeMoreAnswers&&n.createElement("button",{className:"load_more_answers",onClick:this.handleViewMoreAnswers},"LOAD MORE ANSWERS"),this.state.seeMoreAnswers&&n.createElement("button",{className:"collapse_answers",onClick:this.collapseAnswers},"COLLAPSE ANSWERS"))}}const E=(0,i.Z)(w,"questions_answers");class b extends n.Component{constructor(e){super(e),this.state={QAs:[],filteredQAs:[],viewMoreQuestions:!1,isFormShown:!1,searchWord:""},this.getAllQuestions=this.getAllQuestions.bind(this),this.sortQuestionsByHelpfulness=this.sortQuestionsByHelpfulness.bind(this),this.handleAddQuestion=this.handleAddQuestion.bind(this),this.handleViewMoreQuestions=this.handleViewMoreQuestions.bind(this),this.closeForm=this.closeForm.bind(this),this.handleChangeSearch=this.handleChangeSearch.bind(this),this.filterSearch=this.filterSearch.bind(this)}componentDidMount(){this.getAllQuestions()}getAllQuestions(){return o().get(`/qa/questions/${this.props.productId}`).then((e=>{let t=this.sortQuestionsByHelpfulness(e.data.results);this.setState({QAs:t})})).catch((e=>{console.log("Failed to render questions for the product")}))}sortQuestionsByHelpfulness(e){return e.sort(((e,t)=>t.question_helpfulness-e.question_helpfulness))}handleAddQuestion(e){this.props.interaction(e.target),this.setState({isFormShown:!0})}handleViewMoreQuestions(e){this.props.interaction(e.target),this.setState({viewMoreQuestions:!0})}closeForm(){this.setState({isFormShown:!1})}handleChangeSearch(e){this.setState({searchWord:e,filteredQAs:this.filterSearch(this.state.QAs)})}filterSearch(e){return e.filter((e=>e.question_body.includes(this.state.searchWord)))}render(){if(!this.props.productId||!this.props.productName)throw new Error("The product ID or product name is not specified");return n.createElement("div",{className:"questions_answers"},n.createElement("h2",{className:"questions_answers_title"},"QUESTIONS & ANSWERS"),n.createElement(a,{handleChangeSearch:this.handleChangeSearch}),this.state.searchWord.length<2?n.createElement(n.Fragment,null,this.state.QAs.map(((e,t)=>{if(!(t>1))return n.createElement(E,{key:t,productId:this.props.productId,qa:e,productName:this.props.productName})})),this.state.viewMoreQuestions&&this.state.QAs.map(((e,t)=>{if(!(t<2))return n.createElement(E,{key:t,qa:e,productId:this.props.productId,productName:this.props.productName})}))):n.createElement(n.Fragment,null,this.state.filteredQAs.map((e=>n.createElement(E,{key:e.question_id,productId:this.props.productId,qa:e,productName:this.props.productName})))),n.createElement("div",{className:"questions_btn"},this.state.QAs.length>2&&n.createElement("button",{className:"more_answered_questions",onClick:this.handleViewMoreQuestions},"More answered questions"),n.createElement("button",{className:"add_question",onClick:this.handleAddQuestion},"Add A Question +")),this.state.isFormShown&&n.createElement(h,{productId:this.props.productId,productName:this.props.productName,closeForm:this.closeForm}))}}const g=(0,i.Z)(b,"questions_answers")},8212:e=>{e.exports={CLOUD_NAME:"dgbojnm96",CLOUD_PRESET:"fec_atelier"}},6120:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var n=s(5466),a=s(4559),r=s.n(a);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},o.apply(this,arguments)}const i=(e,t)=>{class s extends n.Component{constructor(e){super(e)}interactionFunc(e){var s=e.id?e.nodeName+"#"+e.id:e.nodeName+"."+e.className,n=String(new Date);r().post("/interactions",{element:s,widget:t,time:n}).then((e=>{201===e.status&&console.log(e.data)})).catch((e=>{console.error(e)}))}render(){return n.createElement(e,o({},this.props,{interaction:this.interactionFunc.bind(this)}))}}return s}}}]);