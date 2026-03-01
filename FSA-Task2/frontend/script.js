const tableBody = document.querySelector('#students-table tbody');
const departmentCount = document.getElementById('department-count');
const sortSelect = document.getElementById('sort');
const filterSelect = document.getElementById('filter');

const fetchStudents = async () => {
  const sort = sortSelect.value;
  const filter = filterSelect.value;
  let url = 'http://localhost:3000/students';
  const params = [];
  if (sort) params.push(`sort=${sort}`);
  if (filter) params.push(`filter=${encodeURIComponent(filter)}`);
  if (params.length) url += '?' + params.join('&');

  const res = await fetch(url);
  const data = await res.json();
  tableBody.innerHTML = '';
  data.forEach(student => {
    const row = `<tr>
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.department}</td>
      <td>${student.admission_date}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
};

const fetchCount = async () => {
  const res = await fetch('http://localhost:3000/count');
  const data = await res.json();
  departmentCount.innerHTML = '';
  data.forEach(item => {
    const li = `<li>${item.department}: ${item.count}</li>`;
    departmentCount.innerHTML += li;
  });
};

// Event listeners
sortSelect.addEventListener('change', fetchStudents);
filterSelect.addEventListener('change', fetchStudents);

// Initial load
fetchStudents();
fetchCount();
