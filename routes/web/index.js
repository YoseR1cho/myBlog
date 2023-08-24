var express = require('express');
var router = express.Router();

// 引入文章集合
const ArticleModel = require('../../models/ArticleModels')

//引入moment模块
const moment = require('moment')

// 文章列表
router.get('/', function(req, res, next) {
  ArticleModel.find().then(data=>{
    res.render('index', { articles:data,moment:moment })
  }).catch(err=>{
    res.status(500).send('我不见了呜呜呜~~~')
  })
});

// 获取单一文章列表
router.get('/article/:id',(req,res)=>{
  let id = req.params.id;
  ArticleModel.find({_id:id}).then(data=>{
    res.render('article',{item:data,moment:moment})
  }).catch(()=>{
    res.status(500).send('加载文章失败~~');
  })
})

//发布文章
router.get('/post',(req,res)=>{
  res.render('editor');
})

//修改单篇文章
router.get('/modify/:id',(req,res)=>{
  let id = req.params.id;
  ArticleModel.find({_id:id}).then(data=>{
    res.render('modify',{data:data});
  }).catch(()=>{
    res.status(500).send('修改请求失败~~~');
  })
})

// 提交修改数据
router.post('/patch/:id',(req,res)=>{
  let id = req.params.id;
  ArticleModel.updateOne({_id:id},req.body).then(data=>{
    res.render('success',{msg:'修改文章成功~~~',url:'/'})
  }).catch(()=>{
    res.status(500).send('修改文章失败！');
  })
})

router.get('/classify',(req,res)=>{
  res.render('classify');
})

//提交表单数据
router.post('/',(req,res)=>{
  const dataTime = new Date();
  ArticleModel.create({
    ...req.body,
    time:moment(dataTime).toDate()
  }).then(data=>{
    res.render('success',{msg:'发布成功~~~',url:'/'} )
  }).catch(()=>{
    res.status(500).send('发布失败！');
  })
})

//删除单篇文章
router.get('/delete/:id',(req,res)=>{
  let id = req.params.id;
  ArticleModel.deleteOne({_id:id}).then(data=>{
    res.render('success',{msg:'删除成功~~~',url:'/'});
  }).catch(()=>{
    res.status(500).send('删除失败~~~');
  })
})

module.exports = router;
