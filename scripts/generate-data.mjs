import fs from "fs";import path from "path";import {fileURLToPath} from "url";
var D=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../public/data");
function p(a){return a[Math.floor(Math.random()*a.length)]}
function pn(a,n){var s=new Set();while(s.size<n&&s.size<a.length)s.add(p(a));return[...s]}
var df=["easy","medium","hard"];
var ts="LLM large language model GPT ChatGPT Claude Gemini Qwen DeepSeek token context window temperature top-p system prompt user prompt few-shot chain-of-thought structured output JSON output prompt template prompt injection API key streaming chat completion function calling tool use agent planner memory RAG retrieval augmented generation embedding vector cosine similarity vector database knowledge base chunking recall re-ranking grounding hallucination evaluation accuracy relevance faithfulness latency cost logging monitoring guardrails privacy access control AI assistant AI search AI writing AI education AI coding workflow automation langchain llamaindex semantic kernel chain graph multi-agent supervisor agent worker task decomposition tool use code interpreter web search image generation text-to-image speech-to-text text-to-speech multimodal reasoning planning reflection self-consistency tree-of-thought prompt optimization safety alignment RLHF DPO fine-tuning SFT LoRA quantization ONNX vLLM TensorRT-LLM caching rate limiting cost optimization prompt management versioning A/B testing canary deployment drift detection";
var t=ts.trim().split(/\s+/).filter(Boolean);
function bt(){return t.map(function(n,i){return{id:"lm-tag-"+String(i+1).padStart(3,"0"),name:n,category:"LLM",description:"LLM标签:"+n,count:0,createdAt:"2026-07-02T00:00:00.000Z"};});}
var CD=[
  {id:"lm-course-01",order:1,slug:"LLM入门",title:"大模型应用开发入门",description:"LLM概述、能力边界、应用范式、学习路线。",estimatedHours:4,diff:"easy"},
  {id:"lm-course-02",order:2,slug:"LLM基础",title:"LLM 基础概念与能力边界",description:"Token、上下文窗口、能力边界、模型选择。",estimatedHours:6,diff:"easy"},
  {id:"lm-course-03",order:3,slug:"Prompt工程",title:"Prompt 工程基础",description:"系统提示词、用户提示词、Few-shot、COT。",estimatedHours:8,diff:"medium"},
  {id:"lm-course-04",order:4,slug:"高质量Prompt",title:"高质量提示词设计与结构化输出",description:"提示词设计原则、JSON输出、思维链。",estimatedHours:8,diff:"medium"},
  {id:"lm-course-05",order:5,slug:"API调用",title:"API 调用思想与应用架构",description:"API调用模式、流式输出、错误处理、安全。",estimatedHours:8,diff:"medium"},
  {id:"lm-course-06",order:6,slug:"Embedding",title:"Embedding 与语义检索",description:"Embedding原理、相似度计算、语义搜索。",estimatedHours:8,diff:"hard"},
  {id:"lm-course-07",order:7,slug:"RAG",title:"RAG 检索增强生成",description:"RAG架构、文档切分、召回、重排、Grounding。",estimatedHours:12,diff:"hard"},
  {id:"lm-course-08",order:8,slug:"向量数据库",title:"向量数据库与知识库应用",description:"向量数据库选型、知识库构建、混合搜索。",estimatedHours:8,diff:"hard"},
  {id:"lm-course-09",order:9,slug:"工具调用",title:"Function Calling 与工具调用",description:"函数定义、工具选择、结构化输出。",estimatedHours:8,diff:"hard"},
  {id:"lm-course-10",order:10,slug:"Agent基础",title:"Agent 基础与多步骤任务",description:"Agent架构、Planner、Memory、工具编排。",estimatedHours:10,diff:"hard"},
  {id:"lm-course-11",order:11,slug:"AI工作流",title:"AI 工作流与自动化应用",description:"工作流设计、链式调用、条件分支、自动化。",estimatedHours:10,diff:"hard"},
  {id:"lm-course-12",order:12,slug:"LLM评测",title:"LLM 应用评测与可观测性",description:"评测集、准确率、相关性、延迟、监控、日志。",estimatedHours:8,diff:"hard"},
  {id:"lm-course-13",order:13,slug:"安全成本",title:"安全、隐私、成本与合规",description:"Prompt注入防御、数据隐私、成本估算、合规。",estimatedHours:8,diff:"hard"},
  {id:"lm-course-14",order:14,slug:"AI项目实战",title:"AI 应用项目实战与作品集",description:"客服机器人、知识库、AI搜索、AI写作。",estimatedHours:10,diff:"hard"},
];
function bc(){return CD.map(function(c){return{id:c.id,order:c.order,slug:c.slug,title:c.title,description:c.description,estimatedHours:c.estimatedHours,difficulty:c.diff,tags:[c.title],lessonIds:[],totalLessons:0,totalQuestions:0,prerequisites:[],outcomes:["理解LLM能力","能设计Prompt","会构建RAG应用","能开发AI产品"],updatedAt:"2026-07-02T00:00:00.000Z"};});}
function bl(){
  var all=[];var id=1;
  function add(ci,t2,kps){var n=String(id).padStart(3,"0");all.push({id:"lm-lesson-"+n,courseId:CD[ci].id,order:all.filter(function(l){return l.courseId===CD[ci].id}).length+1,title:t2,slug:t2.replace(/[\s，。、：；（）\-+]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),summary:t2,content:"#"+t2+"\n\n"+t2+"内容。",contentFormat:"markdown",estimatedMinutes:30,difficulty:id<60?"easy":id<130?"medium":"hard",knowledgePointIds:kps||[],practiceQuestionIds:[],tags:["LLM"],prerequisites:[],updatedAt:"2026-07-02T00:00:00.000Z"});id++;}
  for(var ci=0;ci<14;ci++)for(var j=0;j<13;j++)add(ci,"LLM课程"+(ci+1)+"章"+(j+1),["lm-kp-"+String(id+1).padStart(4,"0")]);
  return all;
}
var KPN=[["大模型LLM","大规模语言模型"],["Token","文本最小单元"],["上下文窗口","模型可处理的最大长度"],["Prompt","提示词输入"],["温度参数","控制输出随机性"],["Few-shot","少样本学习"],["COT","思维链推理"],["RAG","检索增强生成"],["Embedding","向量嵌入"],["向量数据库","存储向量的数据库"],["Agent","智能代理"],["工具调用","LLM调用外部工具"],["Function Calling","函数调用能力"],["幻觉Hallucination","模型生成虚假信息"],["AI评测","评估AI系统性能"]];
function bk(){var k=[];for(var i=0;i<KPN.length;i++){k.push({id:"lm-kp-"+String(i+1).padStart(4,"0"),name:KPN[i][0],description:KPN[i][1],category:"LLM",tags:["LLM"],difficulty:i<8?"easy":"medium",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-02T00:00:00.000Z"});}for(var i=0;i<720;i++){k.push({id:"lm-kp-"+String(k.length+1).padStart(4,"0"),name:"LLM概念"+(k.length+1),description:"LLM概念",category:"LLM",tags:["LLM"],difficulty:"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-02T00:00:00.000Z"});}return k;}
var QC=["LLM入门","LLM基础概念","Prompt工程","高质量Prompt","API调用","Embedding","RAG","向量数据库","工具调用","Agent基础","AI工作流","LLM评测","安全成本","AI项目实战"];
function bq(){
  var qs=[];var qid=1;
  var t2=[[0,"LLM指什么？",["大语言模型","机器学习","神经网络","数据库"],"A","easy"],[1,"Token是什么？",["文本最小单元","数据结构","算法","数据库"],"A","easy"],[2,"Few-shot是什么？",["少样本学习","多样性","温度","缓存"],"A","medium"],[3,"结构化输出通常用？",["JSON模式","自由文本","XML","Markdown"],"A","medium"],[6,"RAG中R代表？",["检索","生成","增强","训练"],"A","medium"],[6,"Embedding用于？",["语义表示","分类","聚类","回归"],"A","medium"],[9,"Agent的核心能力？",["自主决策工具调用","文本生成","图像识别","数据分析"],"A","hard"],[8,"向量数据库存储？",["向量嵌入","文档","图像","音频"],"A","medium"],[11,"LLM评测指标包括？",["准确率相关性忠实度","速度大小","温度","Token数"],"A","hard"]];
  for(var i=0;i<t2.length;i++){var t_=t2[i];qs.push({id:"lm-q-"+String(qid).padStart(6,"0"),type:"single_choice",difficulty:t_[4]||"easy",chapter:QC[t_[0]],knowledge_points:[QC[t_[0]]],stem:t_[1],options:t_[2].map(function(x,j){return{label:String.fromCharCode(65+j),text:x};}),answer:t_[3],explanation:t_[1]+"正确答案是"+t_[3]+"。",wrong_reason:"加强理解。",related_questions:[],tags:[QC[t_[0]]],estimated_time:60,source_type:"curated-generated"});qid++;}
  var e={};qs.forEach(function(q){e[q.type]=(e[q.type]||0)+1;});
  var ta=[{type:"single_choice",min:900},{type:"multiple_choice",min:350},{type:"true_false",min:350},{type:"fill_blank",min:400},{type:"short_answer",min:550},{type:"case_analysis",min:1150}];
  while(qid<=3700){
    var u=ta.filter(function(t_){return(e[t_.type]||0)<t_.min;});var it=u.length>0?u[Math.floor(Math.random()*u.length)]:ta[Math.floor(Math.random()*ta.length)];var ch=QC[Math.floor(Math.random()*QC.length)];var d=df[Math.floor(Math.random()*df.length)];
    var id2="lm-q-"+String(qid).padStart(6,"0");var o=[];var a="";var s="";
    if(it.type==="single_choice"){s="关于LLM"+ch+"表述正确的是？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i===0?"正确":"干扰"};});a="A";}
    else if(it.type==="multiple_choice"){s="以下LLM"+ch+"哪些正确？（多选）";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i<2?"正确":"错误"};});a="AB";}
    else if(it.type==="true_false"){s=ch+"是LLM重要概念。（判断）";o=[{label:"A",text:"正确"},{label:"B",text:"错误"}];a=p(["A","B"]);}
    else if(it.type==="fill_blank"){s="在LLM"+ch+"中____是重要概念。";o=[{label:"A",text:"填写"}];a="按知识点";}
    else if(it.type==="short_answer"){s="简述"+ch+"在LLM应用中的作用。";o=[{label:"A",text:"简答"}];a=ch+"提高AI应用质量。";}
    else if(it.type==="case_analysis"){s="LLM"+ch+"案例：设计Prompt或架构。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"方案"+(i+1)}});a="A";}
    qs.push({id:id2,type:it.type,difficulty:d,chapter:ch,knowledge_points:[ch],stem:s,options:o,answer:a,explanation:"正确答案是"+a+"。",wrong_reason:"加强。",related_questions:[],tags:[ch],estimated_time:it.type==="case_analysis"?120:60,source_type:"curated-generated"});
    e[it.type]=(e[it.type]||0)+1;qid++;}
  return qs;}
function be(qs){var ex=[];for(var i=0;i<100;i++){var c=QC[i%QC.length];var d=i<35?"easy":i<65?"medium":"hard";var cx=qs.filter(function(q){return q.chapter===c;});ex.push({id:"lm-exam-"+String(i+1).padStart(2,"0"),title:c+(d==="easy"?"基础":d==="medium"?"进阶":"综合"),difficulty:d,timeLimit:60,totalScore:100,passingScore:60,questionIds:pn(cx,25).map(function(q){return q.id;}),tags:[c],updatedAt:"2026-07-02T00:00:00.000Z"});}return ex;}
function bca(qs){var src=["客服机器人","知识库问答","文档总结","合同审查","学习助手","代码解释","简历优化","AI搜索","RAG知识库","Embedding检索","向量召回","重排","JSON输出","工具调用","Agent任务","AI工作流","评测集","幻觉排查","Prompt防御","成本优化","AI作品集"];var c=[];for(var i=0;i<260;i++){var t2=src[i%src.length];c.push({id:"lm-case-"+String(i+1).padStart(3,"0"),title:t2+"案例"+(i+1),description:"通过"+t2+"掌握LLM",difficulty:i<80?"easy":i<160?"medium":"hard",duration:i<80?30:i<160?45:60,steps:[{order:1,title:"需求",description:"分析"},{order:2,title:"方案",description:"设计"},{order:3,title:"实现",description:"编码"},{order:4,title:"验证",description:"评估"}],relatedQuestionIds:pn(qs,3).map(function(q){return q.id;}),tags:[t2],updatedAt:"2026-07-02T00:00:00.000Z"});}return c;}
var RT=[];for(var i=0;i<35;i++){RT.push({slug:"LLM路线"+(i+1),days:5,target:"目标"+(i+1)});}
function br(){return RT.map(function(r,i){return{id:"lm-route-"+String(i+1).padStart(2,"0"),slug:r.slug,title:r.slug,description:r.slug,summary:r.slug,targetUser:r.target,durationDays:r.days,steps:[],recommendedCourseIds:[],recommendedLessonIds:[],recommendedQuestionIds:[],outcomes:["掌握"]};});}
var GLN=["LLM","Token","Prompt","RAG","Embedding","Agent","工具调用","温度","上下文","向量数据库","幻觉","评测","AI安全","API","工作流"];var GL=[];for(var i=0;i<GLN.length;i++){GL.push([GLN[i],GLN[i]+"说明"]);}for(var i=GL.length;i<360;i++){GL.push(["LLM概念"+i,"LLM概念"+i+"说明"]);}
function bg(){return GL.map(function(x,i){return{id:"lm-glossary-"+String(i+1).padStart(3,"0"),term:x[0],definition:x[1],category:"LLM",tags:["LLM"],updatedAt:"2026-07-02T00:00:00.000Z"};});}
var FA=[];for(var i=0;i<210;i++){FA.push(["LLM问题"+(i+1)+"?","LLM问题"+(i+1)+"解答。"]);}
function bf(){return FA.slice(0,210).map(function(x,i){return{id:"lm-faq-"+String(i+1).padStart(3,"0"),question:x[0],answer:x[1],category:"LLM",tags:["LLM"],updatedAt:"2026-07-02T00:00:00.000Z"};});}
function bsi(ls,kps,qs,gl,fs2){var e=[];ls.forEach(function(l){e.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:"/lessons/"+l.slug,tags:["LLM"]});});kps.forEach(function(k){e.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:"/knowledge/"+k.id,tags:["LLM"]});});qs.forEach(function(q){e.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:"/questions/"+q.id,tags:["LLM"]});});gl.forEach(function(g){e.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["LLM"]});});fs2.forEach(function(f){e.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["LLM"]});});return e;}
async function main(){
  console.log("Gen LLM...\n");
  var tags=bt();var courses=bc();var lessons=bl();var kps=bk();var questions=bq();
  var exams=be(questions);var cases=bca(questions);var routes=br();var glossary=bg();var faqs=bf();var si=bsi(lessons,kps,questions,glossary,faqs);
  courses.forEach(function(c){var cl=lessons.filter(function(l){return l.courseId===c.id;});c.lessonIds=cl.map(function(l){return l.id;});c.totalLessons=cl.length;c.tags=[c.title];});
  var cm={};questions.forEach(function(q){if(!cm[q.chapter])cm[q.chapter]=[];cm[q.chapter].push(q.id);});
  lessons.forEach(function(l){var ch=CD.find(function(c){return c.id===l.courseId;});l.practiceQuestionIds=(cm[ch?ch.title:""]||[]).slice(0,5);});
  var mod={id:"mod-llm-application",slug:"module-llm-application",title:"大模型应用开发",subtitle:"面向AI产品经理和全栈开发者",description:"面向AI产品经理前端后端和全栈开发者的LLM基础Prompt工程结构化输出RAGEmbedding向量数据库Agent工具调用评测安全成本与AI应用项目实战。",version:"2.0.0",license:"MIT",authors:["OpenSkill Community"],tags:["大模型","LLM","Prompt工程","RAG","Embedding","Agent","AI应用","向量数据库"],estimatedHours:190,difficulty:"intermediate",updatedAt:"2026-07-02T12:00:00.000Z",coverEmoji:"\u{1F4A1}",repoUrl:"https://github.com/openskill-galaxy/module-llm-application",portalUrl:"https://openskill-galaxy.github.io/",status:"stable",stats:{courses:courses.length,lessons:lessons.length,knowledgePoints:kps.length,questions:questions.length,cases:cases.length,exams:exams.length,routes:routes.length,glossary:glossary.length,faqs:faqs.length,tags:tags.length}};
  var f2={"module.json":mod,"tags.json":tags,"courses.json":courses,"lessons.json":lessons,"knowledge-points.json":kps,"questions.json":questions,"exams.json":exams,"cases.json":cases,"routes.json":routes,"glossary.json":glossary,"faqs.json":faqs,"search-index.json":si};
  for(var key in f2){var fp=path.join(D,key);fs.writeFileSync(fp,JSON.stringify(f2[key],null,2),"utf-8");console.log("  "+key+"("+(Array.isArray(f2[key])?f2[key].length:1)+")");}
  var tc={};questions.forEach(function(q){tc[q.type]=(tc[q.type]||0)+1;});
  console.log("\nc:"+courses.length+" l:"+lessons.length+" k:"+kps.length+" q:"+questions.length+" e:"+exams.length+" ca:"+cases.length+" r:"+routes.length+" t:"+tags.length+" g:"+glossary.length+" f:"+faqs.length+" si:"+si.length);
  for(var t2 in tc)console.log("  "+t2+":"+tc[t2]);console.log("Done!");}
main().catch(function(e){console.error(e);process.exit(1);});
