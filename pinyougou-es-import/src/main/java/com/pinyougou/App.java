package com.pinyougou;

import com.pinyougou.service.ItemService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 */
public class App {

    public static void main(String[] args) {

        //1.初始化spring容器
        ApplicationContext context = new ClassPathXmlApplicationContext("classpath:spring/applicationContext-es.xml");

        //2.获取容器中的serivce的实例对象
        ItemService itemService = context.getBean(ItemService.class);
        //3.调用实例的方法 导入
        itemService.importDBToEs();
        //调用service的方法 导入数据到ES中

    }
}
