import React from 'react'
//导入加载组件
import { Spin ,Card, Rate } from 'antd'
const { Meta } = Card;
//导入样式表
import cssobj from '@/css/movieList.scss'

export default class MovieList extends React.Component{
    constructor(props){
        super()
        this.state={
            mtype:props.match.params.type,//电影类型
            nowPage:props.match.params.page,//页码
            isLoading: true ,//默认正在加载中
            movieList: [] ,//电影列表
            pageSize: 10
        }
    }
    render(){
        return <div>
            {this.state.isLoading ?<div style={{textAlign: 'center'}}><Spin size="large" /></div> : <div className={cssobj.mList}>
                {this.state.movieList.map(item=><Card key={item.id}
                hoverable
                className={cssobj.mItem}
                style={{ width: 210 }}
                cover={<img alt="example" src={item.images.small}/>}
            >
                <Meta 
                style={{textAlign: 'center'}}
                title={item.title}
                description={'电影类型'+item.genres.join(',')}
                />
                <Rate disabled defaultValue={2} />
            </Card>)}
            </div>} 
        </div>
    }
    //组件数据更新
    componentWillReceiveProps(nextProps){
        this.setState({
            mtype:nextProps.match.params.type,
            nowPage:nextProps.match.params.page,
            isloading:true
        },function(){
            setTimeout(()=>{
                this.getMovieList()
            },1000)
        })
    }
    //组件要被挂载
    componentWillMount(){
        setTimeout(()=>{
            this.getMovieList()
        },1000)
    }

    getMovieList= async()=>{
        const start=(this.state.nowPage-1)*this.state.pageSize
        const res=await this.$http(this.baseURL+'/v2/movie/'+this.state.mtype+'?start='+ start+'&count='+this.state.pageSize)
        const data=await res.json()
        console.log(data.subjects)
        this.setState({
            movieList: data.subjects,
            isLoading:false
        })
        
    }
}