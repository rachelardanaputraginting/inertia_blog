<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect([
            ['name' => $name = 'HTML', 'slug' => str($name)->slug()],
            ['name' => $name = 'CSS', 'slug' => str($name)->slug()],
            ['name' => $name = 'JavaScrip', 'slug' => str($name)->slug()],
            ['name' => $name = 'PHP', 'slug' => str($name)->slug()],
            ['name' => $name = 'Tailwind CSS', 'slug' => str($name)->slug()],
            ['name' => $name = 'Bootstrap', 'slug' => str($name)->slug()],
            ['name' => $name = 'React JS', 'slug' => str($name)->slug()],
            ['name' => $name = 'Vue JS', 'slug' => str($name)->slug()],
        ])->each(fn ($tag) => Tag::create($tag));
    }
}
