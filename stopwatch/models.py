from django.db import models

# Create your models here.
class stopwatch(models.Model):
	hour =models.CharField(max_length=64)
	
	def __str__(self):
		return f"{self.hour}"