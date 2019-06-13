package com.pinyougou.page.service;

import com.pinyougou.pojo.TbItem;

import java.util.List;

/**
 * 描述
 *
 * @author 三国的包子
 * @version 1.0
 * @package com.pinyougou.page.service *
 * @since 1.0
 */
public interface ItemPageService {

    void genItemHtml(Long id);

    void deleteByIds(Long[] longs);

}
