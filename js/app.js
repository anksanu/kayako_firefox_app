$('#login-button').on('click', function(){
	alert('lets begin with the api intergration dude !!');
	var xhr = new XMLHttpRequest({mozSystem: true});
	var url = "http://ekansh.kayako.com/staffapi/index.php?/Core/Default/Login";
	var params = "username=admin&password=changeit";
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
	xhr.setRequestHeader("Content-length", params.length);
	xhr.setRequestHeader("Connection", "close");

	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
		alert(xhr.responseXML);
	  }
	}
	xhr.send(params);

});


$('#navigator').click(function(){
		$('div.sidenav').toggleClass('on');
		$('#navigator').toggleClass('on');
});



// 	<script>
// 		$(document).ready(function(){
//           //Invoke Pincode Search API
// 		  $("#btnSearch").click(function(){
// 		    pincode = $("#searchCriteria").val();
// 		    var xhr = new XMLHttpRequest({mozSystem: true});
// var url = "http://ekansh.kayako.com/staffapi/index.php?/Core/Default/Login";
// var params = "username=admin&password=changeit";
// xhr.open("POST", url, true);

// //Send the proper header information along with the request
// xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
// xhr.setRequestHeader("Content-length", params.length);
// xhr.setRequestHeader("Connection", "close");

// 			xhr.onreadystatechange = function() {
// 			  if (xhr.readyState == 4) {

// 				result = "<li>Status " +$(xhr.responseXML).find("status").text() + "</li>";
// 				result += "<li>Error: " +$(xhr.responseXML).find("error").text() + "</li>";
// 				result += "<li>Version: " +$(xhr.responseXML).find("version").text() + "</li>";
// 				result += "<li>Session ID: " +$(xhr.responseXML).find("sessionid").text() + "</li>";
// 			//	result += "<li>State: " + obj.State + "</li>";
// 				//console.log(result);
// 				$("#searchResults").html(result);
// 				//$('#searchResults').listview('refresh');
// 			  }
// 			}
// 			xhr.send(params);
		  
// 		  });
// 		  });
		  
// 	</script>