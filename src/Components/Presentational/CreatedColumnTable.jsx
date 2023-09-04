import { string } from 'prop-types';

function CreatedColumn({ date }) {
  const uploadedDocumentDate = new Date(date);
  const uploadedMonth = uploadedDocumentDate.toLocaleString('id-ID', {
    month: 'long',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
  });
  return (
    <h1>
      {uploadedMonth}
    </h1>
  );
}

export default CreatedColumn;

CreatedColumn.propTypes = {
  date: string.isRequired,
};
