import PropTypes from 'prop-types';

export function Section({ title, children }) {
  return (
    <section title={title}>
      <title>{title}</title>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
