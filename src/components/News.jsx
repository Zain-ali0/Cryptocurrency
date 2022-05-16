import React from 'react';
import { Select , Typography , Row , Col , Avatar , Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const demoimage = 'https://bitcoin.org/img/icons/opengraph.png?1651392467';

const News = ( { simplified } ) => {
  const {data: cryptoNews} = useGetCryptoNewsQuery({newsCategory:'Cryptocurrency' , count: simplified ? 6 : 12});
  //console.log(cryptoNews);
  if(!cryptoNews?.value) return 'loading...';

  return (
    <>
      <Row gutter={[24,24]}>
        {cryptoNews.value.map((news,i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className='news-card' >
              <a href={news.url} target="_blank" rel='noreferrer'>
                <div className='news-image-container'>
                  <Typography.Title className='news-title' level={4} >{news.name}</Typography.Title>
                  <img style={{maxWidth:'200px' , maxHeight:'100px'}} src={news?.image?.thumbnail?.contenUrl || demoimage} />
                </div>
                <p>
                  {news.description > 100 ? `${news.description.subsstring(0.100)}....` : news.description}
                </p>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default News;