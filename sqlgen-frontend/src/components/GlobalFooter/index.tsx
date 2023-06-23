import {UserOutlined,} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-components';
import React from 'react';
import './index.less';

/**
 * 全局 Footer
 *
 * @author https://sonna.cn
 */
const GlobalFooter: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div id="footer">
                <div id="invisible"></div>
                <DefaultFooter
                    className="default-footer"
                    copyright={`${currentYear} 雪天困不住的大孩子`}
                    links={[
                        {
                            key: 'master',
                            title: (
                                <>
                                    <UserOutlined/> 雪天困不住的大孩子
                                </>
                            ),
                            href: 'https://sonna.cn/',
                            blankTarget: true,
                        },

                    ]}
                />
            </div>

        </>

    );
};

export default GlobalFooter;
