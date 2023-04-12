from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    city = models.CharField(max_length=1000)
    address = models.TextField()

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def __str__(self):
        return f'{self.id}: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city':self.city,
            'address':self.address
        }

class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(
        to=Company,
        on_delete=models.CASCADE,
        related_name='companies'
    )

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return f'{self.id}: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description':self.description,

        }


