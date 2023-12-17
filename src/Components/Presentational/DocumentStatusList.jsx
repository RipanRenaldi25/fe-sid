import React from 'react';
import propTypes from 'prop-types';
import DocumentStatusItem from '../Reusable/DocumentStatusItem';

function DocumentStatusList({ documentList = [] }) {
  return (
    <div>
      {documentList.map((document, i) => (
        <DocumentStatusItem key={document.id} status={document.process} title={document.documents[0].type} date={document.createdAt} isNew={i === 0} />
      ))}
    </div>
  );
}

export default DocumentStatusList;
