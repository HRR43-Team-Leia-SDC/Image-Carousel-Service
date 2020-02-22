import http from 'k6/http';
import { sleep } from 'k6';

export default function() {
  http.get(`http://localhost:5000?4913406`);
  http.get(`http://localhost:5000/carousel/4913406`);
  sleep(1);
}