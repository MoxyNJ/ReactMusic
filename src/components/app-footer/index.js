import React, { Fragment, memo } from "react";

import { footerLinks, footerImages } from "@/common/local-data";

import { AppFooterWrapper, FooterLeft, FooterRight } from "./style";

export default memo(function LJAppFooter() {
    return (
        <AppFooterWrapper>
            <div className="wrap-v2 content">
                <FooterLeft className="left">
                    <div className="link">
                        {footerLinks.map((item) => {
                            return (
                                // Fragment 在render中做一个不可见的元素包裹，少一层div嵌套
                                <Fragment key={item.title}>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        {item.title}
                                    </a>
                                    <span className="line">|</span>
                                </Fragment>
                            );
                        })}
                    </div>
                    <div className="copyright">
                        <span>个人使用无版权所有©1997-2022</span>
                        <span>
                            个人娱乐无科技有限公司运营：
                            <a href="#" rel="noopener noreferrer" target="_blank">
                                心文[2022] 1186-054号
                            </a>
                        </span>
                    </div>
                    <div className="report">
                        <span>违法和不良信息举报电话：0571-8985351116</span>
                        <span className="mail">
                            举报邮箱：
                            <a href="mailto:ncm5990@163.com" rel="noopener noreferrer" target="_blank">
                                ncm5990@163.com
                            </a>
                        </span>
                    </div>
                    <div className="info">
                        <a href="https://beian.miit.gov.cn/" rel="noopener noreferrer" target="_blank">
                            随机B2-20880191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站
                        </a>
                        <a href="https://beian.miit.gov.cn/" rel="noopener noreferrer" target="_blank">
                            <span className="police-icon"></span>
                            <span className="police-text">晋ICP备2021017941号-1</span>
                        </a>
                    </div>
                </FooterLeft>
                <FooterRight className="right">
                    {footerImages.map((item, index) => {
                        return (
                            <li className="item" key={item.link}>
                                <a className="link" href={item.link} rel="noopener noreferrer" target="_blank">
                                    {" "}
                                </a>
                                <span className="title">{item.title}</span>
                            </li>
                        );
                    })}
                </FooterRight>
            </div>
        </AppFooterWrapper>
    );
});
