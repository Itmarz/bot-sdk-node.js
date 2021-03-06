/**
 * @file RenderDocument test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../lib/Bot');

const RenderDocument = Bot.Directive.DPL.RenderDocument;
const Document = Bot.Directive.DPL.Document;

describe('Test DPL/RenderDocument.js', () => {
    let document = new Document();
    document.initDocument({
        type: 'DPL',
        version: '1.0',
        dataSource: {
            pageData: [
                {
                    text1: 'the first item text1',
                    src1: 'https://dbp-dict.bj.bcebos.com/homecard1024-520.jpg'
                },
                {
                    text2: 'this second item text2',
                    src2: 'https://dbp-dict.bj.bcebos.com/%E5%9C%A8%E5%AE%B6%E8%B4%B4.png'
                }
            ],
            data: {
                a: 10,
                b: 20,
                src: 'https://duerstatic.bj.bcebos.com/swan/dbp/compare/compare_vs.png',
                text: '一段较大的字体的文本!',
                text1: '一段较大的字体的文本1!',
                text2: '一段较大的字体的文本2!',
                text3: '一段较大的字体的文本3!',
                content: 'This is custom content',
                content1: 'This is mylayout text',
                layout3: 'layout3 in data',
                layout4: 'layout4 in data'
            },
            listData: [
                {
                    text: 'text1',
                    src: 'http://src1'
                },
                {
                    text: 'text2',
                    src: 'http://src2'
                }
            ],
            content: 'This is custom content'
        },
        mainTemplate: {
            parameters: [
                'payload'
            ],
            items: [
                {
                    type: 'Header',
                    headerTitle: 'Pager-页面'
                },
                {
                    type: 'Pager',
                    initialPage: 1,
                    componentId: 'test_page_pageId1',
                    data: '${payload.pageData}',
                    firstItem: [
                        {
                            type: 'Text',
                            text: 'This is page firstItem text'
                        }
                    ],
                    items: [
                        {
                            type: 'Text',
                            lineHeight: 10,
                            textAlign: 'left',
                            text: '${data.text1}'
                        },
                        {
                            type: 'Image',
                            src: '${data.src3}'
                        }
                    ]
                }
            ]
        }
    });
    let renderDocument = new RenderDocument();
    renderDocument.setToken('test_token');
    renderDocument.setDocument(document);
    renderDocument.setDataSources({
        data: {
            content: 'test content'
        }
    });

    it('#getData', () => {
        renderDocument.getData().should.deepEqual({
            type: 'DPL.RenderDocument',
            token: 'test_token',
            document: {
                type: 'DPL',
                version: '1.0',
                dataSource: {
                    pageData: [
                        {
                            text1: 'the first item text1',
                            src1: 'https://dbp-dict.bj.bcebos.com/homecard1024-520.jpg'
                        },
                        {
                            text2: 'this second item text2',
                            src2: 'https://dbp-dict.bj.bcebos.com/%E5%9C%A8%E5%AE%B6%E8%B4%B4.png'
                        }
                    ],
                    data: {
                        a: 10,
                        b: 20,
                        src: 'https://duerstatic.bj.bcebos.com/swan/dbp/compare/compare_vs.png',
                        text: '一段较大的字体的文本!',
                        text1: '一段较大的字体的文本1!',
                        text2: '一段较大的字体的文本2!',
                        text3: '一段较大的字体的文本3!',
                        content: 'This is custom content',
                        content1: 'This is mylayout text',
                        layout3: 'layout3 in data',
                        layout4: 'layout4 in data'
                    },
                    listData: [
                        {
                            text: 'text1',
                            src: 'http://src1'
                        },
                        {
                            text: 'text2',
                            src: 'http://src2'
                        }
                    ],
                    content: 'This is custom content'
                },
                mainTemplate: {
                    parameters: [
                        'payload'
                    ],
                    items: [
                        {
                            type: 'Header',
                            headerTitle: 'Pager-页面'
                        },
                        {
                            type: 'Pager',
                            initialPage: 1,
                            componentId: 'test_page_pageId1',
                            data: '${payload.pageData}',
                            firstItem: [
                                {
                                    type: 'Text',
                                    text: 'This is page firstItem text'
                                }
                            ],
                            items: [
                                {
                                    type: 'Text',
                                    lineHeight: 10,
                                    textAlign: 'left',
                                    text: '${data.text1}'
                                },
                                {
                                    type: 'Image',
                                    src: '${data.src3}'
                                }
                            ]
                        }
                    ]
                }
            },
            dataSources: {
                data: {
                    content: 'test content'
                }
            }
        });
    });
});

