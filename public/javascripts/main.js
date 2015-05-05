$(function(){
	//导航栏切换
	var url = window.location.pathname;
	var $nav = $('ul.navbar-nav').eq(0);
	if(url === '/'){
		$nav.children().eq(0).addClass('active');
	}else if(url === '/movie/new'){
		$nav.children().eq(1).addClass('active');
	}else if(url === '/admin/movielist'){
		$nav.children().eq(2).addClass('active');
	}else if(url === '/user/list'){
		$nav.children().eq(3).addClass('active');
	}else if(url === '/admin/category/list'){
		$nav.children().eq(4).addClass('active');
	}
	//注册界面表单验证
	$('#signupbtn').click(function(){
		var target = $(this);
		var $form = $('#signupModal form');
		var	username = $('#signupName');
		var password = $('#signupPassword');
		var repassword = $('#signupRePassword');
		var $alert = $('#signupModal .alert').hide();
		if(username.val() === '' || password.val() === '' || repassword.val() === ''){
			$alert.text('信息输入不完整!').show();
		}else if(password.val() !== repassword.val()){
			$alert.text('两次的密码不一致').show();
		}else{
			$.ajax({
				url:'/user/signup',
				type:'post',
				dataType:'json',
				data:$form.serialize(),
				success:function(data){
					if(data.success){
						$('#signupModal').hide();
						window.location = window.location.origin+data.pathname;
					}else{
						$alert.text('用户已经存在').show();
					}
				}
			});
		}
	});
	function checkImgType(filename) {  
	    var pos = filename.lastIndexOf(".");  
	    var str = filename.substring(pos, filename.length)  
	    var str1 = str.toLowerCase();  
	    if (!/\.(gif|jpg|jpeg|png|bmp)$/.test(str1)) {  
	        return false;  
	    }  
	    return true;  
	} 
	// $('#uploadAvatar').click(function(){
	// 	var avatar = $('.preview');
	// 	var input = $('input.avatar');
	// 	if(input.val() !== '' &&  !checkImgType(input.val())){
	// 		alert("格式不正确,只能上传格式为gif|jpeg|jpg|png|bmp！");  
 //            return false;  
	// 	}
	// 	var myform,form;
	// 	if($('#upload-avatar').length === 0){
	// 		myform = document.createElement("form");
	// 		myform.id = 'upload-avatar';
	// 		myform.action = '/avatar/upload';
	// 		myform.method = 'post';
	// 		myform.enctype = "multipart/form-data";  
	// 	    myform.style.display = "none";
	//     	document.body.appendChild(myform);
	//     	form = $(myform);
	// 	}else{
	//     	form = $(myform);
	// 		form.find('input').remove();
	// 	}
	//     var clone = input.clone(true);
	//     clone.appendTo(form);
	//     console.log(form)
	// });
	$('form#user_setting').onSubmit = function(){
		var avatar = $('input.avatar');
		if(input.val() !== '' &&  !checkImgType(input.val())){
			alert("格式不正确,只能上传格式为gif|jpeg|jpg|png|bmp！");  
            return false;  
		}
	}

});