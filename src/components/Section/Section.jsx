import PropTypes from 'prop-types';

export function Section({ title, children }) {
  return (
    <section title={title}>
      <p>{title}</p>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
