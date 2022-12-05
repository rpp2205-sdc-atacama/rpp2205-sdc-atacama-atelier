(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[633],{5633:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>g});const a=e=>React.createElement("div",{className:"search_container"},React.createElement("input",{className:"search_input",placeholder:"HAVE A QUESTION? SEARCH FOR ANSWERS…",onChange:t=>e.handleChangeSearch(t.target.value)}),React.createElement("i",{className:"fa-solid fa-magnifying-glass search_icon"}));var n=s(5466),r=s(4559),o=s.n(r),l=s(6120),i=s(8212),c=s.n(i);const h=(0,l.Z)((e=>{const[t,s]=(0,n.useState)(""),[a,r]=(0,n.useState)(""),[l,i]=(0,n.useState)(""),[h,u]=(0,n.useState)(""),[d,m]=(0,n.useState)(),[p,w]=(0,n.useState)([]),[R,E]=(0,n.useState)([]),[g,b]=(0,n.useState)(!1),_=e=>null!==String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),f=e=>0===e.trim().length,N=(e,t,s)=>{o().post(e,t).then((e=>{b(!0)})).catch((e=>{console.log("Failed to send the form")}))};return React.createElement("div",{className:"modal_container"},React.createElement("div",{className:"modal_content"},React.createElement("span",{className:"modal_close",onClick:()=>{e.closeForm(),m(!1),b(!1)}},"×"),g?React.createElement("div",null,React.createElement("p",null,"Your request has been submitted!"),React.createElement("button",{onClick:e.closeForm},"Close")):React.createElement("div",null,React.createElement("form",{onSubmit:async s=>{s.preventDefault(),(()=>{let e=0!==t.length&&!f(t),s=0!==a.length&&!f(a),n=0!==l.length&&!f(l),r=0!==h.length&&!f(h)&&_(h),o=(e||s)&&n&&r;return m(o),o})()&&(0!==t.length?(()=>{let e=[];for(var t=0;t<R.length;t++){let s=o().post(`https://api.cloudinary.com/v1_1/${c().CLOUD_NAME}/image/upload`,R[t]);e.push(s)}return Promise.all(e).then((e=>e.map((e=>e.data.secure_url)))).catch((e=>{console.log("err: ",e)}))})().then((a=>{N(`/qa/questions/${e.questionId}/answers`,{body:t,name:l,email:h,photos:a},s.target)})):0!==a.length&&N("qa/questions",{body:a,name:l,email:h,product_id:e.productId}))}},e.questionBody?React.createElement("h2",null,"Submit Your Answer"):React.createElement("h2",null,"Ask Your Question"),e.questionBody?React.createElement("h4",null,e.productName,": ",e.questionBody):React.createElement("h4",null,"About the ",e.productName),e.questionBody?React.createElement("div",null,React.createElement("label",{htmlFor:"answer_body"},"Your Answer:"),React.createElement("input",{type:"text",id:"answer_body",className:"text_answer",maxLength:"1000",onChange:e=>{return t=e.target.value,void s(t);var t}})):React.createElement("div",null,React.createElement("label",{htmlFor:"question_body"},"Your Question:"),React.createElement("input",{type:"text",id:"question_body",className:"text_question",maxLength:"1000",onChange:e=>{return t=e.target.value,void r(t);var t}})),React.createElement("label",{htmlFor:"nickname"},"What is your nickname?"),React.createElement("input",{className:"nickname",placeholder:e.questionBody?"jackson11!":"Example: jack543!",maxLength:"60",id:"nickname",onChange:e=>{return t=e.target.value,void i(t);var t}}),React.createElement("p",{className:"sub_text"},"For privacy reasons, do not use your full name or email address"),React.createElement("label",{htmlFor:"email"},"Your Email"),React.createElement("input",{className:"email",id:"email",onChange:e=>{return t=e.target.value,void u(t);var t},placeholder:"Example: jack@email.com"}),React.createElement("p",{className:"sub_text"},"For authentication reasons, you will not be emailed"),e.questionBody&&p.length<5&&React.createElement("div",{className:"upload_button"},React.createElement("label",{className:"upload_text"},React.createElement("input",{type:"file",onChange:e=>(e=>{let t=new FormData;t.append("file",e[0]),t.append("upload_preset",c().CLOUD_PRESET);let s=URL.createObjectURL(e[0]),a=p.concat(s),n=R.concat(t);w(a),E(n)})(e.target.files),multiple:!0}),"Upload your photos")),p.map(((e,t)=>React.createElement("img",{key:e,src:e,className:"upload_image"}))),React.createElement("input",{type:"submit",value:void 0!==e.questionBody?"Submit answer":"Submit question",className:"submit_button"})),!1===d?React.createElement(React.Fragment,null,React.createElement("p",{className:"form_warning"+(h.length?"_format_error":"")},"You must enter the following: "),React.createElement("div",{className:"form_warning"},(()=>{let s;return s=e.questionBody?[["answer",0!==t.length],["nickname",0!==l.length],["email",h.length&&_(h)]]:[["question",0!==a.length],["nickname",0!==l.length],["email",h.length&&_(h)]],s.filter((e=>{if(!e[1])return e[0]}))})().map((e=>"email"===e[0]&&h.length&&!_(h)?React.createElement("li",{key:e},"Your email does not meet the right format"):0===e.length?React.createElement(React.Fragment,null):React.createElement("li",{key:e[0]},e[0]))))):React.createElement("div",null))))}),"questions_answers");class u extends React.Component{constructor(e){super(e),this.state={helpfulness:e.question.question_helpfulness,isFormShown:!1,isYesClicked:!1},this.handleAddAnswer=this.handleAddAnswer.bind(this),this.handleIncreaseCounts=this.handleIncreaseCounts.bind(this),this.closeForm=this.closeForm.bind(this)}handleAddAnswer(e){this.props.interaction(e.target),this.setState({isFormShown:!0})}closeForm(){this.setState({isFormShown:!1})}handleIncreaseCounts(e){this.props.interaction(e.target),this.setState({isYesClicked:!0,helpfulness:this.state.helpfulness+1},(()=>{o().put(`/qa/questions/${this.props.question.question_id}/helpful`).then((e=>{if(204!==e.status)throw err})).catch((e=>{console.log("failed to increment counts")}))}))}render(){return React.createElement("div",{className:"question_container"},React.createElement("p",{className:"question"},"Q: ",this.props.question.question_body),React.createElement("div",{className:"helpful_container"},React.createElement("div",{className:"helpful_text"},"Helpful?"),React.createElement("button",{className:"yes_button",disabled:this.state.isYesClicked,onClick:this.handleIncreaseCounts},"Yes"),React.createElement("div",{className:"helpfulness_number"},"(",this.state.helpfulness,")"),React.createElement("div",{className:"border_line"}),React.createElement("button",{className:"add_answer_button",onClick:this.handleAddAnswer},"Add Answer")),this.state.isFormShown&&React.createElement(h,{productId:this.props.productId,questionId:this.props.question.question_id,questionBody:this.props.question.question_body,productName:this.props.productName,isFormShown:this.state.isFormShown,closeForm:this.closeForm}))}}const d=(0,l.Z)(u,"questions_answers");class m extends React.Component{constructor(e){super(e),this.state={helpfulness:e.answer.helpfulness,isYesClicked:!1,isReported:!1},this.handleReport=this.handleReport.bind(this),this.handleIncreaseCounts=this.handleIncreaseCounts.bind(this),this.handleDateFormat=this.handleDateFormat.bind(this)}handleReport(e){this.props.interaction(e.target),this.setState({isReported:!0},(()=>{o().put(`/qa/answers/${this.props.answer.answer_id}/report`).then((e=>{if(204!==e.status)throw err})).catch((e=>{console.log("failed to increment the count")}))}))}handleIncreaseCounts(e){this.props.interaction(e.target),this.setState({isYesClicked:!0,helpfulness:this.state.helpfulness+1},(()=>{o().put(`/qa/answers/${this.props.answer.answer_id}/helpful`).then((e=>{if(204!==e.status)throw err})).catch((e=>{console.log("failed to increment the count")}))}))}handleDateFormat(e){let t=new Date(e),s=t.getDate();return`${["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]} ${s}, ${t.getFullYear()}`}render(){let{body:e,answerer_name:t,date:s}=this.props.answer;return React.createElement("div",{className:"answer_container"},React.createElement("div",{className:"answer_symbol"},"A: ",React.createElement("span",{className:"answer_text"},e)),React.createElement("div",{className:"answer_sub"},React.createElement("div",{className:"by"},"by"),React.createElement("span",{className:"Seller"===t?"seller":"answerer"},"Seller"===t?"Seller":t),React.createElement("div",{className:"answer_date"},this.handleDateFormat(s)),React.createElement("div",{className:"border_line"}),React.createElement("div",{className:"helpful_text"},"Helpful?"),React.createElement("button",{className:"yes_button",disabled:this.state.isYesClicked,onClick:this.handleIncreaseCounts},"Yes"),React.createElement("div",{className:"helpfulness_number"},"(",this.state.helpfulness,")"),this.state.isReported?React.createElement("button",{disabled:this.state.isReported,className:"report_button",role:"button"},"Reported"):React.createElement("button",{className:"report_button",role:"button",onClick:this.handleReport},"Report")))}}const p=(0,l.Z)(m,"questions_answers");class w extends React.Component{constructor(e){super(e),this.state={answers:[],seeMoreAnswers:!1},this.getAnswers=this.getAnswers.bind(this),this.sortAnswers=this.sortAnswers.bind(this),this.handleViewMoreAnswers=this.handleViewMoreAnswers.bind(this),this.collapseAnswers=this.collapseAnswers.bind(this)}async componentDidMount(){let e=await this.getAnswers(),t=this.sortAnswers(e);this.setState({answers:t})}getAnswers(){let e=this.props.qa.question_id,t=Object.keys(this.props.qa.answers).length;return o().get(`/qa/questions/${e}/answers/${t}`).then((e=>e.data.results)).catch((e=>{console.log("Failed to retrieve answers for the question")}))}sortAnswers(e){let t=e.filter((e=>"Seller"===e.answerer_name)).sort(((e,t)=>t.helpfulness-e.helpfulness)),s=e.filter((e=>"Seller"!==e.answerer_name)).sort(((e,t)=>t.helpfulness-e.helpfulness));return t.concat(s)}handleViewMoreAnswers(e){this.props.interaction(e.target),this.setState({seeMoreAnswers:!0})}collapseAnswers(e){this.props.interaction(e.target),this.setState({seeMoreAnswers:!1})}render(){return React.createElement("div",{className:"QA_container"},React.createElement(d,{question:this.props.qa,productId:this.props.productId,productName:this.props.productName}),React.createElement("div",{className:this.state.seeMoreAnswers?"answers_expand_mode":void 0},this.state.answers.map(((e,t)=>{if(!(t>1))return React.createElement(p,{key:t,answer:e})})),this.state.seeMoreAnswers&&this.state.answers.map(((e,t)=>{if(!(t<2))return React.createElement(p,{key:t,answer:e})}))),this.state.answers.length>2&&!this.state.seeMoreAnswers&&React.createElement("button",{className:"load_more_answers",onClick:this.handleViewMoreAnswers},"LOAD MORE ANSWERS"),this.state.seeMoreAnswers&&React.createElement("button",{className:"collapse_answers",onClick:this.collapseAnswers},"COLLAPSE ANSWERS"))}}const R=(0,l.Z)(w,"questions_answers");class E extends React.Component{constructor(e){super(e),this.state={QAs:[],filteredQAs:[],isFormShown:!1,searchWord:"",counts:2},this.getAllQuestions=this.getAllQuestions.bind(this),this.sortQuestionsByHelpfulness=this.sortQuestionsByHelpfulness.bind(this),this.handleAddQuestion=this.handleAddQuestion.bind(this),this.handleViewMoreQuestions=this.handleViewMoreQuestions.bind(this),this.closeForm=this.closeForm.bind(this),this.handleChangeSearch=this.handleChangeSearch.bind(this),this.filterSearch=this.filterSearch.bind(this)}componentDidMount(){this.getAllQuestions()}getAllQuestions(){return o().get(`/qa/questions/${this.props.productId}/20`).then((e=>{let t=this.sortQuestionsByHelpfulness(e.data.results);this.setState({QAs:t})})).catch((e=>{console.log("Failed to render questions for the product")}))}sortQuestionsByHelpfulness(e){return e.sort(((e,t)=>t.question_helpfulness-e.question_helpfulness))}handleAddQuestion(e){this.props.interaction(e.target),this.setState({isFormShown:!0})}handleViewMoreQuestions(e){this.props.interaction(e.target),this.setState({counts:this.state.counts+=2})}closeForm(){this.setState({isFormShown:!1})}handleChangeSearch(e){this.setState({searchWord:e,filteredQAs:this.filterSearch(this.state.QAs)})}filterSearch(e){return e.filter((e=>e.question_body.includes(this.state.searchWord)))}render(){if(!this.props.productId||!this.props.productName)throw new Error("The product ID or product name is not specified");return React.createElement("div",{className:"questions_answers"},React.createElement("h2",{className:"questions_answers_title"},"QUESTIONS & ANSWERS"),React.createElement(a,{handleChangeSearch:this.handleChangeSearch}),this.state.searchWord.length<2?React.createElement("div",{className:"questions"+(this.state.counts>3?"_expand_mode":"")},this.state.QAs.slice(0,this.state.counts).map(((e,t)=>React.createElement(R,{key:t,qa:e,productId:this.props.productId,productName:this.props.productName})))):React.createElement(React.Fragment,null,this.state.filteredQAs.map((e=>React.createElement(R,{key:e.question_id,productId:this.props.productId,qa:e,productName:this.props.productName})))),React.createElement("div",{className:"questions_btn"},this.state.QAs.length>2&&this.state.counts<this.state.QAs.length&&React.createElement("button",{className:"more_answered_questions",onClick:this.handleViewMoreQuestions},"More answered questions"),React.createElement("button",{className:"add_question",onClick:this.handleAddQuestion},"Add A Question +")),this.state.isFormShown&&React.createElement(h,{productId:this.props.productId,productName:this.props.productName,closeForm:this.closeForm}))}}const g=(0,l.Z)(E,"questions_answers")},8212:e=>{e.exports={CLOUD_NAME:"dskwqzkmr",CLOUD_PRESET:"oekwzkmj"}},6120:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var a=s(5466),n=s(4559),r=s.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},o.apply(this,arguments)}const l=(e,t)=>{class s extends a.Component{constructor(e){super(e)}interactionFunc(e){var s=e.id?e.nodeName+"#"+e.id:e.nodeName+"."+e.className,a=String(new Date);r().post("/interactions",{element:s,widget:t,time:a}).then((e=>{201===e.status&&console.log(e.data)})).catch((e=>{console.error(e)}))}render(){return a.createElement(e,o({},this.props,{interaction:this.interactionFunc.bind(this)}))}}return s}}}]);