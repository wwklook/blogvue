<template>
    <div class="topics">
      <div class="header">
      </div>
      <div v-html="content" v-highlight></div>
    </div>
</template>

<script>
let c1 = `这是第一篇博客,用于测试的markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

*斜体*或_斜体_  
**粗体**  
***加粗斜体***  
~~删除线~~  
++下划线++
==背景高亮==  

> 这是引用的内容
>> 士大夫撒旦

---  
\`\`\`javascript
  function fun() {
    console.log("这是一句的代码";)
}
\`\`\`
- - -

---  
\`\`\`python
  def add(a, b):
    return a + b

  add(3, 5)
\`\`\`
- - -

<center>  <!--开始居中对齐-->

![blockchain](https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=702257389,1274025419&fm=27&gp=0.jpg)

</center> <!--结束居中对齐-->

[简书](http://jianshu.com)  
[百度](http://baidu.com)

* 列表内容
* 列表内容
 * 列表内容
 * 列表内容
   * 列表内容
   * 列表内容
     * 列表内容
     * 列表内容

1. 列表内容
2. 列表内容
3. 列表内容

- [ ] 任务一 未做任务 \`- + 空格 + [ ]\`
- [x] 任务二 已做任务 \`- + 空格 + [x]\`

【1】 &emsp;或&#8195; //全角  
【2】 &ensp;或&#8194; //半角  
【3】 &nbsp;或&#160;  //半角之半角  

<center>行中心对齐</center>
<p align="left">行左对齐</p>
<p align="right">行右对齐</p>

我经常去的几个网站[Google][1]、[Leanote][2]。

[1]:http://www.google.com 
[2]:http://www.leanote.com

\`\`\`math
E = mc^2
\`\`\`
`;

let c2 = `# flex布局
## 一、Flex布局是什么？
#### 任何一个容器都可以指定为Flex布局。
    .box {
      display: flex;
    }
## 二、基本概念
#### 采用Flex布局的元素，称为Flex容器（flex container），简称”容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称”项目”。
![](https://www.runoob.com/wp-content/uploads/2015/07/3791e575c48b3698be6a94ae1dbff79d.png")
#### 容器默认存在根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。
#### 项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。
## 三、容器的属性
### 1. flex-direction属性
#### flex-direction属性决定主轴的方向（即项目的排列方向）。
    .box {
      flex-direction: row | row-reverse | column | column-reverse;
    }
- row（默认值）：主轴为水平方向，起点在左端。
- row-reverse：主轴为水平方向，起点在右端。</li>
- column：主轴为垂直方向，起点在上沿。- column-reverse：主轴为垂直方

### 2. flex-rap属性
#### 默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。
    .box { 
      flex-wrap: nowrap | wrap | wrap-reverse;   
    }
- nowrap（默认）：不换行。
- wrap：换行，第一行在上方。
- wrap-reverse：换行，第一行在下方。

### 3. flex-flw属性
#### flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
    .box { 
      flex-flow: <flex-direction><flex-wrap>
    }
### 4. justify-content属性
#### justify-content属性定义了项目在主轴上的对齐方式。
    .box { 
      justify-content: flex-start | flex-end | center | space-between | space-around;
    }
- flex-start（默认值）：左对齐
- flex-end：右对齐
- center： 居中
-space-between：两端对齐，项目之间的间隔都相等。
- space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

### 5. align-items属性
#### align-items属性定义项目在交叉轴上如何对齐。
    .box { 
      align-items: flex-start | flex-end | center | baseline | stretch;
    }
    - flex-end：交叉轴的终点对齐。
    - center：交叉轴的中点对齐。
    - stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

### 6. align-content属性
#### align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
    .box { 

    }
    - flex-start：交叉轴的起点对齐。
    - center：交叉轴的中点对齐。
    - space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
    - space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
    - stretch（默认值）：轴线占满整个交叉轴。

## 四、项目的属性
### 4.1 order属性
    .box { 
      order: <integer>
    }
### 4.2 flex-grow属性
#### flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
    .box { 
      flex-grow: <number>; /* default 0 */
    }
    - 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

### 4.3 flex-shrink属性
#### flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
    .box { 
      flex-shrink: <number>; /* default 1 */
    }
    - 如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
    - 负值对该属性无效。
### 4.4 flex-basis属性
#### flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
    .box { 
      flex-basis: <length> | auto; /* default auto */
    }
    - 它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。

### 4.5 flex属性
#### flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
    .box { 
      flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ];
    }
    - 该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
    - 建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

### 4.6 align-self属性
#### align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
    .box { 
      align-self: auto | flex-start | flex-end | center | baseline | stretch;
    }
   - 该属性可能取6个值，除了auto，其他都与align-items属性完全一致。`

// import 'highlightjs-line-numbers.js/src/highlightjs-line-numbers.js';
import marked from "marked";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/monokai-sublime.css";

        
export default {
  data() {
    return {
      content: c2,
    };
  },
  mounted() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function (code) {
        // hjls.initLineNumbersOnLoad()
        // console.log(hljs.lineNumbersBlock(hljs.highlightAuto(code).value));
        return hljs.highlightAuto(code).value;
        
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    });
    this.content = marked(this.content);
    //hljs.initLineNumbersOnLoad();
  },
};
</script>

<style scoped>
.topics {
  padding: 10px 20px;
  background-color: white;
  border-radius: 10px;
}
</style>