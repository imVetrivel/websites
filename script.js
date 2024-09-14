// const a = ()=>{
// 	console.log("Hello World")
// }

// let m = 10,b = 11

// let c = (m>b)?m:b
// console.log(c)

// function f1(){
// 	console.log("f1")
// 	f2()
// }

// function f2(){
// 	console.log("f2")
// }
// f1()

// function success()
// {
// 	console.log("Success");
// }
// function fail(){
// 	console.log("Fail");
// }

// function error1(){
// 	console.log("Error");
// }

// function exec(data,callback)
// {
// 	if(data)
// 	{
// 		console.log("Balance :"+data)
// 	}
// 	callback();
// }

// function triger(data)
// {
// 	if(data>0)
// 	{
// 		exec(data,success)
// 	}
// 	else if(data<=0)
// 	{
// 		exec(data,fail)
// 	}
// 	else
// 	exec(data,error1)
// }

// triger(0)

async function api() {
	try {
		const response =  await fetch('https://66e526f25cc7f9b6273c6c66.mockapi.io/register')
	const data = await response.json()
	// console.table(data)
	return data
	} catch (error) {
		console.log(error)
	}
	
}

async function apidata() {

	const apicall = await api()
	console.table(apicall)
	const content = apicall.map((data)=>{console.log(data)})
	
}
apidata()