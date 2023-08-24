var express = require('express');
var router = express.Router();

// 引入文章集合
const ArticleModel = require('../../models/ArticleModels')

//引入moment模块
const moment = require('moment')

// 文章列表
router.get('/', function(req, res, next) {
    ArticleModel.find().then(data=>{
        res.json({
            code:'0000',
            msg:'读取成功',
            data:data
        })
    }).catch(()=>{
        res.json({
            code:'1001',
            msg:'读取失败',
            data:null
        })
    })
});

// 获取单一文章列表
router.get('/:id',(req,res)=>{
    let id = req.params.id;
    ArticleModel.find({_id:id}).then(data=>{
        res.json({
            code:'0000',
            msg:'读取成功',
            data:data
        })
    }).catch(()=>{
        res.json({
            code:'1004',
            msg:'读取失败',
            data:null
        })
    })
})

//修改单篇文章
router.patch('/:id',(req,res)=>{
    let id = req.params.id;
    ArticleModel.updateOne({_id:id},req.body).then(data=>{
        res.json({
            code:'0000',
            msg:'更新成功',
            data:data
        })
    }).catch(()=>[
        res.json({
            code:'1005',
            msg:'更新失败',
            data:{}
        })
    ])
})


//提交表单数据
router.post('/',(req,res)=>{
    const dataTime = new Date();
    ArticleModel.create({
        ...req.body,
        time:moment(dataTime).toDate()
    }).then(data=>{
        res.json({
            code:'0000',
            msg:'创建成功~~',
            data:data
        })
    }).catch(()=>{
        res.json({
            code:'1002',
            msg:'创建失败~~',
            data:null
        })
    })
})

//删除表单数据
router.delete('/delete/:id',(req,res)=>{
    let id = req.params.id;

    ArticleModel.deleteOne({_id:id}).then(data=>{
        res.json({
            code:'0000',
            msg:'删除成功',
            data:{}
        })
    }).catch(()=>{
        res.json({
            code:'1003',
            msg:'删除失败',
            data:null
        })
        return ;
    })
})

module.exports = router;
