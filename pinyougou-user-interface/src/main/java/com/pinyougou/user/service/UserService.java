package com.pinyougou.user.service;
import java.util.List;
import com.pinyougou.pojo.TbUser;

import com.github.pagehelper.PageInfo;
import com.pinyougou.core.service.CoreService;
/**
 * 服务层接口
 * @author Administrator
 *
 */
public interface UserService extends CoreService<TbUser> {
	
	
	
	/**
	 * 返回分页列表
	 * @return
	 */
	 PageInfo<TbUser> findPage(Integer pageNo, Integer pageSize);
	
	

	/**
	 * 分页
	 * @param pageNo 当前页 码
	 * @param pageSize 每页记录数
	 * @return
	 */
	PageInfo<TbUser> findPage(Integer pageNo, Integer pageSize, TbUser User);

	/**
	 * 1.根据手机号  生成验证码
	 *
	 * 2.将验证码 存储到 redis中（key-value）
	 * 3.将验证码 和手机号 签名 模板的内容作为消息体 发送消息到mq中
	 *
	 * @param phone
	 */
    void createSmsCode(String phone);

	/**
	 *  根据手机号 从redis中获取该手机号对应的验证码的值  和 页面传递过来的验证码进行比较
	 * @param smsCode 页面传递过来的验证码
	 * @param phone 页面传递过来的手机号
	 * @return
	 */
    boolean checkCode(String smsCode, String phone);
}
