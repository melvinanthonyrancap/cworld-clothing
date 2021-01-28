import React from 'react';
import { connect } from 'react-redux';
import './collections-overview.styles.scss';
import { createStructuredSelector } from 'reselect';
import  PreviewCollection from '../preview-collection/preview';
import { selectCollectionsForPreview} from '../../redux/shop/shop.selector';


const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
  
  const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
  });
  
  export default connect(mapStateToProps)(CollectionsOverview);