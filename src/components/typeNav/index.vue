<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveHandler">
        <h2 class="all">全部商品分类</h2>
        <div class="sort">
          <div class="all-sort-list2" @click="goSearch">
            <div
              class="item"
              v-for="(c1, index) in categoryArr"
              :key="c1.categoryId"
            >
              <h3
                :class="{ active: activeIndex == index }"
                @mouseenter="enterHandler(index)"
              >
                <a
                  :data-categoryName="c1.categoryName"
                  :data-category1Id="c1.categoryId"
                  >{{ c1.categoryName }}</a
                >
              </h3>
              <div class="item-list clearfix" v-show="activeIndex == index">
                <div class="subitem">
                  <dl
                    class="fore"
                    v-for="c2 in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dt>
                      <a
                        :data-categoryName="c2.categoryName"
                        :data-category2Id="c2.categoryId"
                        >{{ c2.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a
                          :data-categoryName="c3.categoryName"
                          :data-category3Id="c3.categoryId"
                          >{{ c3.categoryName }}</a
                        >
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧秒杀文字 -->
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      activeIndex: -1,
    };
  },
  mounted() {
    this.$store.dispatch("getCategory");
  },
  methods: {
    //鼠标进入-一级分类
    enterHandler(index) {
      //收集鼠标进入H3的下角标
      this.activeIndex = index;
    },
    //鼠标移出的事件回调
    leaveHandler() {
      this.activeIndex = -1;
    },
    // 一级
    goSearch(event) {
      const { categoryname, category1id, category2id, category3id } =
        event.target.dataset;
      if (categoryname) {
        const locations = {
          name: "search",
          query: { categoryName: categoryname },
        };
        if (category1id) {
            locations.query.category1Id=category1id
        } else if (category2id) {
            locations.query.category2Id=category2id
        } else {
            locations.query.category3Id=category3id

        }
        this.$router.push(locations)
      }
    },
  },
  computed: {
    ...mapState({
      categoryArr: (state) => state.Home.category,
    }),
  },
};
</script>

<style scoped lang='less'>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          .active {
            background: rgb(239, 97, 65);
          }
        }
      }
    }
  }
}
</style>