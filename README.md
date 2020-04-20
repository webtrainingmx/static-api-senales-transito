# Static API - Señales de Tránsito #


## End-points disponibles
`GET <host>:4000/traffic-signals/v1/signals`

Obtiene un listado de las señales de tránsito más importantes.


`GET <host>:4000/traffic-signals/v1/questions`

Un ejemplo de un examen de prueba.

## PM2

[PM2](https://pm2.keymetrics.io/docs/usage/quick-start/) permite administrar procesos de NodeJS.

```
cd /path/to/static-api-senales-transito
pm2 start npm --name "signals-api" -- run start
```
