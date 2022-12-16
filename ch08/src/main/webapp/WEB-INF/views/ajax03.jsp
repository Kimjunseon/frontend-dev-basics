<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src='${pageContext.request.contextPath }/assets/js/jquery/jquery-3.6.0.js'></script>
<script>
$(function(){
	var formData = {
		name: "안대혁",
		email: "kickscar@gmail.com",
		password: "1234",
		gender: "male"
	} 
	
	$("#btn-getdata").click(function(){
		$.ajax({
			url: "${pageContext.request.contextPath }/api/03",
			async: true,
			type: "post",
			dataType: "json",
			contentType: "application/json",
			data: JSON.stringify(formData),
			success: function(response){
				var htmls = "";
				htmls += ("<h1>" + response.no + "</h1>");
				htmls += ("<h2>" + response.name + "</h2>");
				htmls += ("<h3>" + response.email + "</h3>");
				
				$("#data").html(htmls);
			},
			error: function(xhr, status, error) {
				console.error(status, error);
			}
		});
	});
});
</script>
</head>
<body>
	<h1>Ajax Test03</h1>
	
	<button id="btn-getdata">데이터 보내기</button>
	<div id="data"></div>
</body>
</html>