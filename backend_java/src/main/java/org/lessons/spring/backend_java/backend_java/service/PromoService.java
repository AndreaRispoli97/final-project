package org.lessons.spring.backend_java.backend_java.service;

import org.lessons.spring.backend_java.backend_java.model.Promo;
import org.lessons.spring.backend_java.backend_java.repository.PromoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PromoService {

    @Autowired
    PromoRepository promoRepository;

    public Promo create(Promo promo) {
        return promoRepository.save(promo);
    }

    public Promo getById(Integer id) {
        return promoRepository.findById(id).get();
    }

    public void delete(Promo promo) {
        promoRepository.delete(promo);
    }

    public void deleteById(Integer id) {
        promoRepository.deleteById(id);
    }
}
