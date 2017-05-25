var js_ = {
    index: function() {
        $('#title_').html('亿美汇金业务介绍6');
        $('.bottom_toolbar ul li').click(function() {
            $('.bottom_toolbar ul li').find('i').css('color', '#82838c');
            $(this).find('i').css('color', '#f6ca47');
        });

        $(window).scroll(function() {
            if ($(window).scrollTop() >= 300) {
                $('.search_content').css('background', '#f6ca47');
                $('.search_content').css('transition', '1s all ease');
            } else {
                $('.search_content').css('background', 'none');
            }
        });

    },
    giftsCategory: function() {

      //console.log(window.screen.availHeight);
      //meta等于机器宽度用 window.screen.availHeight

      //console.log(window.innerHeight);
      //meta等于750宽度用 window.innerHeight

      $('html,body').stop(true,true).animate({
        scrollTop: 0
      }, 0);

      var giftsCategory = $('#giftsCategory');
      var search_box = $('#giftsCategory .search_box');
      var nav_bar = $('#giftsCategory #nav_bar');

      var man_header_height = $('.man_header').height();
      var search_box_height = parseFloat(search_box.height())+parseFloat(search_box.css('padding-bottom'))+parseFloat(search_box.css('padding-top'));
      var bottom_toolbar = parseFloat($('.bottom_toolbar').height());
      var navBar_height = window.innerHeight-search_box_height-bottom_toolbar-5;
      //meta 750 得用 window.innerHeight 屏幕高度
      //console.log(window.innerHeight);
      //console.log(search_box_height);
      //console.log(navBar_height);

      nav_bar.css({'height':navBar_height});

      $(window).scroll(function(){
        if($(document).scrollTop()>=man_header_height){
          search_box.css('position','fixed');
          giftsCategory.css('paddingTop',search_box_height);
          nav_bar.css({'position':'fixed','top':search_box_height});
        }else{
          search_box.css('position','relative');
          giftsCategory.css('paddingTop','0');
          nav_bar.css({'position':'relative','top':'0'});
        }

        /*滚动检测*/
        var scrollTop = $(document).scrollTop();
        var documentHeight = $(document).height();
        //console.log(documentHeight);
        var windowHeight = $(window).height();
        //console.log(windowHeight);
        var listBoxs = $("#giftsCategory .com_box").find('.box');
        var listBoxIndex = "";

        if (scrollTop+windowHeight==documentHeight) {
          listBoxIndex = "#" + listBoxs.last().attr("id");
          //console.log(listBoxIndex);
          navActive();
        }else{
          listBoxs.each(function () {
              var listBox = $(this);
              var offsetTop = listBox.offset().top;
              if (scrollTop >= offsetTop - man_header_height) {//此处的200视具体情况自行设定，因为如果不减去一个数值，在刚好滚动到一个div的边缘时，菜单的选中状态会出错，比如，页面刚好滚动到第一个div的底部的时候，页面已经显示出第二个div，而菜单中还是第一个选项处于选中状态

                listBoxIndex = "#" + listBox.attr("id");
                navActive();
              }
          });
        }
        function navActive(){
          if (listBoxIndex != $("#nav_bar").find("a").attr("data-href")) {
              $("#nav_bar").find(".active").removeClass("active");
              $("#nav_bar").find("[data-href=" + listBoxIndex + "]").addClass("active");
          }else{
            $("#nav_bar").find(".active").removeClass("active");
            $("#nav_bar a").eq(0).addClass("active");
          }
        }
        /*滚动检测结束*/
      });

      $('#giftsCategory #nav_bar .nav li a').click(function(){
        //$('#giftsCategory #nav_bar .nav li').removeClass('active');
        //$(this).parent().addClass('active');
        var link_num = $(this).parent().attr('data-link');
        //console.log('编号'+link_num);

        var top = $('#giftsCategory .listBox .com_box .box[data-link='+link_num+']').offset().top-search_box_height+10;

        if(top<10){
          top=0;
        }

        //console.log('距离顶部距离'+top);

        $('html,body').stop(true,true).animate({
          scrollTop: top
        }, 500);
      });

    },
    phoneRecharge:function(){
      $('#phoneRecharge .moneyList dl').click(function(){
        $('#phoneRecharge .moneyList dl').removeClass('active');
        $(this).addClass('active');
        var rechargeNum = $(this).find('.rechargeNum').text();
        $('#phoneRecharge .total_num span.rechargeNum').text(rechargeNum);
      });
    },
    giftsList:function(){
      var man_header_height = $('.man_header').height();
      //获得头部高度
      var gifts_nav = $('#giftsList .gifts_nav');
      //获得导航
      var gifts_nav_height = $('#giftsList .gifts_nav .box').height();
      //获得导航高度
      var gifts_list = $('#giftsList .gifts_list');
      //获得商品列表
      var shade_box = $('#giftsList .shade_box');
      //获得阴影
      var shade_box_height = window.innerHeight - man_header_height - gifts_nav_height;
      //阴影高度

      shade_box.css({'height':shade_box_height});
      //设置阴影高度

      var giftsID_num = [['1','2','3'],['1','2','3'],['1','2','3']];
      //加载的商品数组，举个例子
      var scrollOver = true;
      //判断是否还能加载商品
      var i=0;
      //i=0 默认为 giftsID_num 的一维数组，根据上面例子为 3 个
      var timeOk = true;
      //上一组商品是否加载完成
      var k = 0;
      //商品数字


      //当刚进入页面时，页面滚动条到顶部，防止刷新后，滚动条在中间
      $('html,body').stop(true,true).animate({
        scrollTop: (1)
      },0);

      $(window).scroll(function(){
      //当页面滚动时
        if($(document).scrollTop()>=man_header_height){
        //页面滚动距离大于头部高度
          gifts_nav.css({'position':'fixed'});
          gifts_list.css('paddingTop',gifts_nav_height);
        }else{
          gifts_nav.css({'position':'relative'});
          gifts_list.css('paddingTop','0');
        }
        if($(document).scrollTop()>=83){
          shade_box.css({'top':'83px'});
          //设置阴影高度
        }else{
          shade_box.css({'top':'105px'});
          //设置阴影高度
        }

        var lastBoxBottom = parseFloat($('#giftsList .gifts_list .box:last').offset().top) + parseFloat($('#giftsList .gifts_list .box').height());
        //最后一个商品底部距离
        //console.log(lastBoxBottom);
        var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
        //页面滚动距离
        //console.log(scrollTop);
        var windowHeight = window.innerHeight;
        //屏幕高度
        //console.log('屏幕高度:'+windowHeight);

        if(lastBoxBottom<scrollTop+windowHeight&&scrollOver&&timeOk){
        //如果 最后一个商品位置距离小于 页面滚动距离 + 屏幕设备高度 并且 可以继续加载 并且 上一组商品加载完成
  				//console.log('加载商品');

          timeOk = false;
          //商品还没有加载完成

          if(i<giftsID_num.length){
          //判断商品一维数组，如果商品还能继续加载，就显示 loading
            $('#giftsList .listLoading').show();
          }

          var t=setTimeout(function(){
          //举个例子，就当之前 loading 了 2秒，这里是 loading 结束后

            $('#giftsList .listLoading').hide();
            //loading消失

            for(i;i<giftsID_num.length;){
            //循环商品一维数组
              for(var j=0;j<giftsID_num[i].length;j++){
              //循环商品二维数组
                $('#giftsList .gifts_list').append('<a class="box d-b"><img class="d-b" src="../../public/images/public/shangpin2.jpg"><dl><dt><div class="left_text f-l">积分： <span>129<span></span></span></div><div class="right_text f-r">浏览量： <span>1482次<span></span></span></div></dt><dd>特罗菲特日常洗发日常洗发 特罗菲特日常洗发日常洗发</dd></dl></a>');
                //页面加载进下一组商品
              }
              i+=1;
              //一维数组索引 +1

              break;
              //跳出 for 循环
            }

            timeOk = true;
            //可以继续加载下一组商品了

          },2000);

          //console.log('i'+i);
          //商品一维数组，当前加载到第几组商品

          if(i==giftsID_num.length){
          //如果当前加载的商品一维数组数，等于一维数组最大值
            scrollOver=false;
            //所有商品加载完成，不能继续加载商品了
            if($('#giftsList .gifts_list .box').length%2==1){
              $("#giftsList .gifts_list .box:even").last().css('border-bottom','1px #fff solid');
            }
            $('#giftsList .nothing').show();
            //提示用户已经到底部了
          }
          //console.log(scrollOver);
  			}else{
          //console.log('页面没有滑动到底部');
        }
      });

      $('#giftsList .gifts_nav .box').click(function(){
        var this_index = $(this).index();
        //用户点击的是第几个 nav

        if($(this).hasClass('open')){
        //如果这个导航是显示的，隐藏其他导航
          $('#giftsList .gifts_nav .box').removeClass('open');
          $('#giftsList .gifts_nav .slide_box').css('height','0');
          $('.html_body .shade_box').hide();

        }else{
          $('#giftsList .gifts_nav .slide_box').eq(this_index).css('height','auto').siblings().css('height','0');
          //显示点击的二级导航，隐藏其他二级导航

          $('#giftsList .gifts_nav .box').removeClass('open');
          $(this).addClass('open');
          $('.html_body .shade_box').show();
        }
      });

      $('#giftsList .gifts_nav .slide_box ul li span').click(function(){
        $('#giftsList .gifts_nav .box').removeClass('open');

        if($(this).parent().hasClass('.active')){
        //如果点击的二级导航不包含已经打开的

        }else{
          $('#giftsList .gifts_nav .slide_box ul li').removeClass('active');
          $(this).parent().addClass('active');
          $('html,body').stop(true,true).animate({
            scrollTop: '0'
          }, 500);

          $('.html_body .loadingCenter,.html_body .shade_box').show();
          var t=setTimeout(function(){
            $('.html_body .loadingCenter,.html_body .shade_box').hide();
          },2000);

          //$('#giftsList .gifts_list').html('');
          //在列表里放入其他类别的商品

          $('#giftsList .nothing,#giftsList .listLoading').hide();
          //隐藏 loading 和 结束提示
        }

        $(this).closest('.slide_box').css('height','0');

      });

      $('#giftsList .gifts_nav .slide_box ul li.long button').click(function(){

        var value1 = $('#giftsList .gifts_nav  li.long input').eq(0).val();
        var value2 = $('#giftsList .gifts_nav  li.long input').eq(1).val();
        //console.log(value1+','+value2);

        if(value1===''||value2===''){
        //两个input输入为空
          console.log('空');

        }else{
          $('#giftsList .gifts_nav .box').removeClass('open');
          $('#giftsList .gifts_nav .slide_box ul li').removeClass('active');
          $(this).closest('.slide_box').css('height','0');
          $('.html_body .shade_box').hide();
          $('html,body').stop(true,true).animate({
            scrollTop: '0'
          }, 500);

          $('.html_body .loadingCenter,.html_body .shade_box').show();
          var t=setTimeout(function(){
            $('.html_body .loadingCenter,.html_body .shade_box').hide();
          },2000);

          //$('#giftsList .gifts_list').html('');
          //在列表里放入其他类别的商品

          $('#giftsList .nothing,#giftsList .listLoading').hide();
          //隐藏 loading 和 结束提示
        }

      });

    },goodsDetails:function(){

      var mySwiper = new Swiper('.swiper-container',{
      //轮播图
      	autoplay: 5000,//可选选项，自动滑动
        loop : true,
        pagination : '.swiper-pagination',
      });

      $('#goodsDetails .promotionBox .countdown').downCount({
      //倒计时
    		date: '4/31/2017 11:30:50',
    		offset: +8
        //别删
    	}, function () {
      //倒计时结束后
    		$('#goodsDetails .promotionBox .countdown .days').text('00');
    		$('#goodsDetails .promotionBox .countdown .hours').text('00');
    		$('#goodsDetails .promotionBox .countdown .minutes').text('00');
    		$('#goodsDetails .promotionBox .countdown .seconds').text('00');
    		//alert('倒计时结束!');
    	});

      $('#goodsDetails .man_header ul li').click(function(){
      //头部导航
        if($(this).hasClass('active')){
        }else{
          $(this).addClass('active').siblings().removeClass('active');
          var linkName = $(this).attr('data-link');
          console.log(linkName);
          $('#goodsDetails .goodsWrap .'+linkName).show().siblings().hide();
        }{
        }
      });

      $('#goodsDetails .addressBox .closeIcon').click(function(){
      //关闭地址窗口
        $('#goodsDetails .shade_box').hide();
        $('#goodsDetails .addressBox').addClass('close');
      });

      $('#goodsDetails .goods .goodsAddress dd').click(function(){
      //显示地址窗口
        $('#goodsDetails .shade_box').show();
        $('#goodsDetails .addressBox').css('opacity','1').removeClass('close');
      });

      $('#goodsDetails .goods .addressList li').click(function(){
      //选择地址
        $(this).addClass('active').siblings().removeClass('active');
        var chooseAddress = $(this).find('span.addressText').text();
        $('#goodsDetails .goods .goodsAddress .addressName').text(chooseAddress);
        $('#goodsDetails .shade_box').hide();
        $('#goodsDetails .addressBox').addClass('close');
      });

      $('#goodsDetails .goods .goodsType dl.color dd.more span').click(function(){
      //选择颜色
        $(this).addClass('active').siblings().removeClass('active');
        //console.log($(this).text());
      });


      $('#goodsDetails .goods .goodsType dl.buyNum dd.form span').click(function(){
        //console.log($(this).index());
        var nowNum = $('#goodsDetails .goods .goodsType dl.buyNum dd.form input').val();
        //获取当前购买数量
        if($(this).index()===0){
        //减号
          if(nowNum>1){
            nowNum-=1;
            $('#goodsDetails .goods .goodsType dl.buyNum dd.form input').val(nowNum);
          }
        }else if($(this).index()==2){
        //加号
          nowNum=parseInt(nowNum)+1;
          $('#goodsDetails .goods .goodsType dl.buyNum dd.form input').val(nowNum);
        }
      });
    },shoppingCart:function(){
      var inEdit = false;
      //非编辑模式

      var compileBtn = $('#shoppingCart .man_header .compileBtn');
      //编辑按钮
      var cartList = $('#shoppingCart #cartList');
      //商品列表
      var cartListBox = $('#shoppingCart #cartList .box');
      //商品
      var allChoose = false;
      //是否全选
      var allSum=0;
      //总价
      var sumNum = $('#shoppingCart .sumNum');

      compileBtn.click(function(){
      //进入或退出编辑模式
        if($(this).hasClass('inEdit')){
        //非编辑中
          inEdit=false;
          $(this).removeClass('inEdit').text('编辑');
          $('#shoppingCart .compileBox .sumBox,#shoppingCart .compileBox .payBtn').show();
          $('#shoppingCart .compileBox .deleteBox,#shoppingCart .compileBox .chooseText').hide();
        }else{
        //编辑中
          inEdit=true;
          $(this).addClass('inEdit').text('完成');
          $('#shoppingCart .compileBox .sumBox,#shoppingCart .compileBox .payBtn').hide();
          $('#shoppingCart .compileBox .deleteBox,#shoppingCart .compileBox .chooseText').show();
        }
      });

      $(document).on('click','#shoppingCart #cartList .box .checkBox',function(){
      //选中商品

        var thisBox = $(this).closest('.box');
        //这个商品
        var thisSum = countBoxPrice(thisBox);

        // var thisComNum = thisBox.find('input').val();
        // //这个商品数量
        // var thisPrice = thisBox.find('.priceNum').text();
        // //这个商品单价
        // var thisSum = parseInt(thisComNum)*parseFloat(thisPrice);
        // //这个商品总价

        if($(this).hasClass('active')){
        //不选这个商品
          $(this).removeClass('active');

          allSum-=thisSum;

        }else{
        //选这个商品
          $(this).addClass('active');

          allSum+=thisSum;

        }
        updateSum(allSum);
        //得到总价
      });

      $('#shoppingCart .compileBox .check').click(function(){
      //全选，非全选
        if(allChoose){
        //如果在全选状态下
          allChoose=false;
          $(this).removeClass('active');
          for(var i=0;i<cartListBox.length;i++){
            cartListBox.eq(i).find('.checkBox').removeClass('active');
          }
          allSum=0;
        }else{
        //如果非全选状态下
          allChoose=true;
          $(this).addClass('active');
          allSum = 0;
          for(var i=0;i<cartListBox.length;i++){
            cartListBox.eq(i).find('.checkBox').addClass('active');
            allSum += countBoxPrice(cartListBox.eq(i));
          }
        }
        updateSum(allSum);
      });

      $(document).on('click','#shoppingCart #cartList .numBox span',function(){
      //商品 加减号
        var thisNum = $(this).parent().find('input').val();
        //获取当前购买数量
        var thisChoose = $(this).closest('.box').find('.checkBox').hasClass('active');
        //是否选中这个商品
        //console.log(thisChoose);
        var thisBoxPrice = parseFloat($(this).closest('dd').find('.priceNum').text());
        //这个商品的单价

        if($(this).index()===0){
        //减号
          if(thisNum>1){
            thisNum-=1;
            $(this).parent().find('input').val(thisNum);
            if(thisChoose){
              allSum-=thisBoxPrice;
            }
          }
        }else if($(this).index()==2){
        //加号
          thisNum=parseInt(thisNum)+1;
          $(this).parent().find('input').val(thisNum);
          if(thisChoose){
            allSum+=thisBoxPrice;
          }
        }
        updateSum(allSum);
      });

      $('#shoppingCart .compileBox .deleteBox .deleteBtn').click(function(){
      //删除商品，如果删除选中的商品，总价必等于0
        var ChooseBox = $('#shoppingCart #cartList .box .checkBox.active').closest('.box');
        //获得选中的商品
        if(ChooseBox.length>0){
        //如果有选中的商品
          for(var i=0;i<ChooseBox.length;i++){
              ChooseBox.eq(i).remove();
              //删除所有选中商品
          }
          allSum = 0;
          updateSum(allSum);
          cartListBox = $('#shoppingCart #cartList .box');
        }else{
        }
      });

      function countBoxPrice(box){
      //获得这个商品的总价
        var thisComNum = box.find('input').val();
        //这个商品数量
        var thisPrice = box.find('.priceNum').text();
        //这个商品单价
        var thisBoxPrice = parseInt(thisComNum)*parseFloat(thisPrice);
        //这个商品总价
        return thisBoxPrice;
      }

      function updateSum(totalPrice){
        sumNum.text(totalPrice);
      }

      /*下拉刷新*/

      var windowHeight = window.innerHeight;
      var scrollOver = true;
      var timeOk = true;
      var giftsID_num = [['8','9','10'],['11','12','13'],['14','15','16']];
      var i=0;
      $(window).scroll(function(){
        var lastBoxBottom = parseFloat($('#shoppingCart #cartList .box:last').offset().top) + parseFloat($('#shoppingCart #cartList .box').height());
        var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;

        //console.log('最后元素的底部距离'+lastBoxBottom);
        //console.log('滚动距离'+scrollTop);
        //console.log('页面高度'+windowHeight);
        if(lastBoxBottom<scrollTop+windowHeight&&scrollOver&&timeOk){
        //如果 最后一个商品位置距离小于 页面滚动距离 + 屏幕设备高度 并且 可以继续加载 并且 上一组商品加载完成
    		//console.log('加载商品');

          timeOk = false;
          //商品还没有加载完成

          if(i<giftsID_num.length){
          //判断商品一维数组，如果商品还能继续加载，就显示 loading
            $('#shoppingCart .listLoading').show();
            //loading显示
          }

          var t=setTimeout(function(){
          //举个例子，就当之前 loading 了 2秒，这里是 loading 结束后

            $('#shoppingCart .listLoading').hide();
            //loading消失

            for(i;i<giftsID_num.length;){
            //循环商品一维数组
              for(var j=0;j<giftsID_num[i].length;j++){
              //循环商品二维数组
                $('#shoppingCart #cartList').append('<div class="box d-ib" data-id='+giftsID_num[i][j]+'><div class="checkBox d-ib f-l"><span></span></div><a href="" class="d-b f-l"><img class="d-b" src="../../public/images/public/shangpin5.jpg"></a><dl class="f-l"><dt><div>雅诗兰黛肌透修护眼部精华</div><div>300ml(专柜）</div></dt><dd><div class="integralBox d-b">积分：<span class="priceNum">1</span></div><div class="numBox d-b"><div class="ddMain d-b"><span class="f-l d-b ta-c subtract">-</span> <input type="text" class="f-l ta-c" value="1"> <span class="f-l d-b ta-c add">+</span></div></div></dd></dl></div>');
                //页面加载进下一组商品
              }
              i+=1;
              //一维数组索引 +1

              break;
              //跳出 for 循环
            }

            timeOk = true;
            //可以继续加载下一组商品了

            cartListBox = $('#shoppingCart #cartList .box');
            //商品

          },2000);

          //console.log('i'+i);
          //商品一维数组，当前加载到第几组商品

          if(i==giftsID_num.length){
          //如果当前加载的商品一维数组数，等于一维数组最大值
            scrollOver=false;
            //所有商品加载完成，不能继续加载商品了

            $('#shoppingCart .nothing').show();
            //提示用户已经到底部了
          }else{

          }
          //console.log(scrollOver);

          allChoose = false;
          $('#shoppingCart .compileBox .checkBox span.check').removeClass('active');
          //是否全选
  			}
      });
      /*下拉刷新结束*/


      function countSum(){
      //获取所有选中商品的价格
          var ChooseBox = $('#shoppingCart #cartList .box .checkBox.active').closest('.box');
          allSum=0;
          var thisId;
          var buyId=[];
          var thisNum;
          var buyNum=[];
          var thisPrice;
          var buyPrice=[];
          for(var i=0;i<ChooseBox.length;i++){
              allSum += countBoxPrice(ChooseBox.eq(i));
              //获取购买商品的总价

              thisId = ChooseBox.eq(i).attr('data-id');
              //获取购买商品的 id
              buyId.push(thisId);

              thisNum = ChooseBox.eq(i).find('input').val();
              buyNum.push(thisNum);

              thisPrice = countBoxPrice(ChooseBox.eq(i));
              buyPrice.push(thisPrice);
          }
          return {'sum':allSum,'buyIdArray':buyId,'buyNumArray':buyNum,'buyPriceArray':buyPrice};
          //返回购买商品的信息
      }


      $('#shoppingCart .compileBox .payBtn').click(function(){
      //支付
        var obj= countSum();
        console.log('所有商品总价：'+obj.sum);
        //所有商品总价
        console.log('所有商品id：'+obj.buyIdArray);
        //购买商品的 id
        console.log('每个商品数量：'+obj.buyNumArray);
        //购买商品的 数量
        console.log('每个商品总价：'+obj.buyPriceArray);
        //购买的每个商品的总价
        for(var i=0;i<obj.buyIdArray.length;i++){
          console.log('id为'+obj.buyIdArray[i]+'的商品购买了'+obj.buyNumArray[i]+'个，它的价格为:'+obj.buyPriceArray[i]);
        }

      });
    },discover:function(){
      $('#discover .discover_list .box .titleBox').click(function(){
        if($(this).parent().hasClass('open')){
          $(this).parent().removeClass('open');
        }else{
          $(this).parent().addClass('open');
        }
      });
    },orderOk:function(){

    },timeLimitBuy:function(){
      $('#timeLimitBuy .nowBox .timeBox .countdown').downCount({
      //倒计时
    		date: '4/31/2017 11:30:50',
    		offset: +8
        //别删
    	}, function () {
      //倒计时结束后
    		$('#timeLimitBuy .nowBox .timeBox .countdown .days').text('00');
    		$('#timeLimitBuy .nowBox .timeBox .countdown .hours').text('00');
    		$('#timeLimitBuy .nowBox .timeBox .countdown .minutes').text('00');
    		$('#timeLimitBuy .nowBox .timeBox .countdown .seconds').text('00');
    		//alert('倒计时结束!');
    	});

      $('#timeLimitBuy .laterBox .timeBox .countdown').downCount({
      //倒计时
    		date: '5/31/2017 11:30:00',
    		offset: +8
        //别删
    	}, function () {
      //倒计时结束后
    		$('#timeLimitBuy .laterBox .timeBox .countdown .days').text('00');
    		$('#timeLimitBuy .laterBox .timeBox .countdown .hours').text('00');
    		$('#timeLimitBuy .laterBox .timeBox .countdown .minutes').text('00');
    		$('#timeLimitBuy .laterBox .timeBox .countdown .seconds').text('00');
    		//alert('倒计时结束!');
    	});

      function switchNav(){
      //切换导航
        $('#timeLimitBuy .navBox .div').click(function(){
          $(this).addClass('active').siblings().removeClass('active');
          if($(this).index()===0){
            $('#timeLimitBuy .nowBox').show().siblings().hide();
          }else{
            $('#timeLimitBuy .laterBox').show().siblings().hide();
          }
          $('html,body').stop(true,true).animate({
            scrollTop: (1)
          },0);
        });
      }
      switchNav();

      function pageScroll(){
        var man_header_height = $('.man_header').height();
        //获得头部高度
        var shade_box = $('#timeLimitBuy .shade_box');
        //获得阴影

        $(window).scroll(function(){
        //当页面滚动时
          if($(document).scrollTop()<=100){
            var shadeBoxHeight = 100 - $(document).scrollTop();
            shade_box.css({'top':shadeBoxHeight+'px'});
            //设置阴影高度
          }else{
            shade_box.css({'top':'0px'});
            //设置阴影高度
          }
        });
      }
      pageScroll();
    }

};
