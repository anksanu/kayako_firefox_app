$('#login-button').on('click', function(){
	alert('lets begin with the api intergration dude !!');
	$.ajax({
		url : 'http://ekansh.kayako.com/staffapi/index.php?/Core/Default/Login',
		type : 'post',
		data : 'username=admin&password=changeit',
		headers: { 
        Accept : "xml",
        "Content-Type": "xml"
    },
		contentType : 'application/x-www-form-urlencoded',
		success : function(response){
			alert(response);
		},
		error : function(){
			alert('unable to login');
		}
	}).complete(function(){
		alert('this call is completed');
	});
});


$('#navigator').click(function(){
		$('div.sidenav').toggleClass('on');
		$('#navigator').toggleClass('on');
});