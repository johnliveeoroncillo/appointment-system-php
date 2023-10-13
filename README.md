## Installation

download the file and open in vs code

```
    composer install
    php artisan cp .env.example .env
    php artisan key:generate
    npm install
```

### For database
```
    php artisan migrate
    php artisan db:seed --class=DoctorSeeder
    php artisan db:seed --class=ServiceSeeder

```

### Run the project
```
    php artisan serve
    npm run dev
```

### Doctor
    email: doctor@example.com
    pass: 12345678
