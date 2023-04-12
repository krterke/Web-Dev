from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view

from . import models

@api_view(['GET'])
def companies_list(request, *args, **kwargs):
    companies = models.Company.objects.all()
    companies_json = [p.to_json() for p in companies]
    return JsonResponse(companies_json, safe=False)

@api_view(['GET'])
def get_company(request, *args, **kwargs):
    company = models.Company.objects.get(**kwargs)
    return JsonResponse(company.to_json(), safe=False)

@api_view(['GET'])
def get_vacancy(request, *args, **kwargs):
    vacancy = models.Vacancy.objects.get(**kwargs)
    return JsonResponse(vacancy.to_json(), safe=False)

@api_view(['GET'])
def vacancies_list(request, *args, **kwargs):
    vacancies = models.Vacancy.objects.all()
    vacancies_json = [b.to_json() for b in vacancies]
    return JsonResponse(vacancies_json, safe=False)

@api_view(['GET'])
def get_vacancy_by_company_id(request, *args, **kwargs):
    vacancies = models.Vacancy.objects.filter(company_id=kwargs['pk'])
    return JsonResponse(vacancies.to_json(), safe=False)

@api_view(['GET'])
def top_ten(request):
    vacancies = models.Vacancy.objects.all().order_by('-salary')[:10]
    return JsonResponse([vacancy.to_json_format() for vacancy in vacancies], safe=False)