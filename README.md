2018 IFE SAN study 
# 1.2 用webpack4 / parcel快速搭建开发san helloworld
webpack4的mode设置的环境和defined插件定义的环境process.env.NODE_ENV，是一个webpack编译环境，影响插件编译动作。
cross-env设置的环境process.env.NODE_ENV是代码环境，js里打印的就是这个环境。
两个环境分离
