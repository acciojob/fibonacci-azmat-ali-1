function fibonacci(num) {
// your code here
	if(num==0){
		return 1;
	}
	if(num==1){
		return 2;
	}
	
	return fibonacci(num-1)+fibonacci(nums-2);
}

module.exports = fibonacci;
